import { Suspense } from "react";
import { PageLoadAnimation } from "@/components/landing";
import { MetaFastTrackOpportunityContent } from "./MetaFastTrackOpportunityContent";

export default function MetaFastTrackOpportunityPage() {
  return (
    <PageLoadAnimation>
      <Suspense fallback={null}>
        <MetaFastTrackOpportunityContent />
      </Suspense>
    </PageLoadAnimation>
  );
}

