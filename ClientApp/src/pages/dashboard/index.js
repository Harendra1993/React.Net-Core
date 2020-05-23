import React, { lazy } from "react";
import { DefaultLayout } from "@/layouts";

const StatisticsCards = lazy(() =>
  import("./StatisticsCards" /* webpackChunkName: "StatisticsCards" */)
);

const RevenueChart = lazy(() =>
  import("./RevenueChart" /* webpackChunkName: "RevenueChart" */)
);

export default function index() {
  return (
    <DefaultLayout>
      <StatisticsCards />
      <RevenueChart />
    </DefaultLayout>
  );
}
