import { useRouter } from "next/router";

import BlogPostView from "@/components/Blog/BlogPostView";
import DashboardMainView from "@/components/DashboardMainView";
import DashboardLayout from "@/layouts/dashboard-layout";

export default function BlogPost() {
  const router = useRouter();
  const postSlug = router.asPath.split("/admin/blog/post/")[1];

  return (
    <DashboardLayout title="Admin page">
      <DashboardMainView>
        {postSlug && postSlug.length > 0 && (
          <BlogPostView postSlug={postSlug} />
        )}
      </DashboardMainView>
    </DashboardLayout>
  );
}
