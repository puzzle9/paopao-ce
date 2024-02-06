package conf

import (
	"context"
	"fmt"
	"sync"

	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/exporters/otlp/otlpmetric/otlpmetricgrpc"
	"go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc"
	"go.opentelemetry.io/otel/propagation"
	sdkmetric "go.opentelemetry.io/otel/sdk/metric"
	sdkresource "go.opentelemetry.io/otel/sdk/resource"
	sdktrace "go.opentelemetry.io/otel/sdk/trace"
)

var (
	resource          *sdkresource.Resource
	initResourcesOnce sync.Once
)

func InitTelemetry() (shutdownFn func(), err error) {
	initResource()
	var (
		tp *sdktrace.TracerProvider
		mp *sdkmetric.MeterProvider
	)

	if tp, err = initTracerProvider(); err != nil {
		return
	}
	if mp, err = initMeterProvider(); err != nil {
		return
	}
	shutdownFn = func() {
		ctx := context.Background()
		tp.Shutdown(ctx)
		mp.Shutdown(ctx)
	}
	return
}

func initResource() *sdkresource.Resource {
	initResourcesOnce.Do(func() {
		extraResources, _ := sdkresource.New(
			context.Background(),
			sdkresource.WithOS(),
			sdkresource.WithProcess(),
			sdkresource.WithContainer(),
			sdkresource.WithHost(),
		)
		resource, _ = sdkresource.Merge(
			sdkresource.Default(),
			extraResources,
		)
	})
	return resource
}

func initTracerProvider() (*sdktrace.TracerProvider, error) {
	s := otlpTraceGrpcSetting
	opts := []otlptracegrpc.Option{
		otlptracegrpc.WithEndpoint(s.Endpoint),
		otlptracegrpc.WithHeaders(s.Headers),
	}
	if s.TLS.Insecure {
		opts = append(opts, otlptracegrpc.WithInsecure())
	}
	exporter, err := otlptracegrpc.New(context.Background(), opts...)
	if err != nil {
		return nil, fmt.Errorf("OTLP Trace gRPC Creation: %w", err)
	}
	tp := sdktrace.NewTracerProvider(
		sdktrace.WithBatcher(exporter),
		sdktrace.WithResource(initResource()),
	)
	otel.SetTracerProvider(tp)
	otel.SetTextMapPropagator(propagation.NewCompositeTextMapPropagator(propagation.TraceContext{}, propagation.Baggage{}))
	return tp, nil
}

func initMeterProvider() (*sdkmetric.MeterProvider, error) {
	s := otlpMetricGrpcSetting
	opts := []otlpmetricgrpc.Option{
		otlpmetricgrpc.WithEndpoint(s.Endpoint),
		otlpmetricgrpc.WithHeaders(s.Headers),
	}
	if s.TLS.Insecure {
		opts = append(opts, otlpmetricgrpc.WithInsecure())
	}
	exporter, err := otlpmetricgrpc.New(context.Background(), opts...)
	if err != nil {
		return nil, fmt.Errorf("new otlp metric grpc exporter failed: %w", err)
	}
	mp := sdkmetric.NewMeterProvider(
		sdkmetric.WithReader(sdkmetric.NewPeriodicReader(exporter)),
		sdkmetric.WithResource(initResource()),
	)
	otel.SetMeterProvider(mp)
	return mp, nil
}
