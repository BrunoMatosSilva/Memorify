import { ResumeList } from "@/src/components/pages/dashboard/resumes/resumes-list";
import { ResumeListSkeleton } from "@/src/components/pages/dashboard/resumes/resumes-list/skeleton";
import { Suspense } from "react";

export default function DashboardResumesPage() {
  return (
    <>
      <h1 className="text-4xl font-bold font-title mb-6">Sua Biblioteca</h1>
      <Suspense fallback={<ResumeListSkeleton />}>
        <ResumeList />
      </Suspense>
    </>
  );
}