import BlogDetailsPrimary from "@/components/sections/blogs/BlogDetailsPrimary";
import HeroInner from "@/components/sections/heros/HeroInner";
import getBlogs from "@/libs/getBlogs";
import getPreviousNextItem from "@/libs/getPreviousNextItem";
import sliceText from "@/libs/sliceText";
const BlogDetailsMain = ({ currentItemId }) => {
	const items = getBlogs();
	const currentId = currentItemId;
	const option = getPreviousNextItem(items, currentId);
	const { title } = option?.currentItem || {};
	return (
		<div>
			<HeroInner
				title={"Détail de l'article"}
				text={title ? sliceText(title, 31, true) : "Détail de l'article"}
				breadcrums={[{ name: "Blog", path: "/blogs" }]}
				noNeedTitleAnim={true}
			/>
			<BlogDetailsPrimary option={option} />
		</div>
	);
};

export default BlogDetailsMain;
