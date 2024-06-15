import { BlogPosts } from '@/components/posts'

export const metadata = {
  title: '小报童专栏精选导航站 | 上新',
  description: '小报童专栏精选导航站上新.',
  keywords: '小报童, 小报童精选, 小报童专栏, 小报童导航, 小报童导航站, 小报童专栏精选导航站'
}

export default function Page() {
  return (
    <section className="min-h-screen bg-gray-100 lg:max-w-3xl md:max-w-2xl sm:max-w-xl w-full mx-auto">
      <h1 className="flex text-3xl font-extrabold text-black mb-12 pt-12 pl-8">小报童专栏精选上新</h1>
      <BlogPosts /> 
    </section>
  )
}
