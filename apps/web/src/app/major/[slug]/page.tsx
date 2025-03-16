interface MajorPageProps {
  params: Promise<{ slug: string }>;
}
export default async function MajorPage({ params }: MajorPageProps) {
  const { slug } = await params;
  return <div>{slug}</div>;
}
