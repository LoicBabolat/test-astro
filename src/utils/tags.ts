export function getUniqueTags(allPosts: any[]): string[] {
    return [
        ...new Set(allPosts.map((post: any) => post.frontmatter.tags).flat()),
    ];
}
