"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export default function DashboardBreadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").slice(1);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathSegments.map((segment, index) => (
          <Fragment key={`path-${segment}`}>
            <BreadcrumbItem>
              {index < pathSegments.length - 1 ? (
                <BreadcrumbLink
                  href={`/${pathSegments.slice(0, index + 1).join("/")}`}
                  className="capitalize"
                >
                  {segment}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage className="capitalize">
                  {segment}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < pathSegments.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
