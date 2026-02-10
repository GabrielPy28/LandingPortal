import { Suspense } from "react";
import { PageLoadAnimation } from "@/components/landing";
import { MetaOpportunityContent } from "./MetaOpportunityContent";

export default function MetaOpportunityPage() {
  return (
    <PageLoadAnimation>
      <Suspense fallback={null}>
        <MetaOpportunityContent />
      </Suspense>
    </PageLoadAnimation>
  );
}
