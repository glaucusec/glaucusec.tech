import GithubSlugger from "github-slugger";
import { Plugin, Transformer } from "unified";
import { Node } from "unist";
import { visit } from "unist-util-visit";
import { VFile } from "vfile";

interface HeadingNode extends Node {
  depth: number;
  children: { value: string }[];
}

export interface TOCNode {
  type?: string;
  depth?: number;
  title?: string;
  id?: string;
  children: TOCNode[];
}

// Helper function to extract text from a node and its children
const extractText = (node: Node): string => {
  let text = "";
  visit(node, (child) => {
    if ("value" in child && typeof child.value === "string") {
      text += child.value;
    }
  });
  return text;
};

export const tocPlugin: Plugin = (): Transformer => {
  return (tree: Node, file: VFile): void => {
    const toc: TOCNode = {
      type: "root",
      children: [],
    };

    const slugger = new GithubSlugger();

    visit(tree, "heading", (node: HeadingNode) => {
      const { depth } = node;
      // Filter out deep headings (H4+) to keep TOC clean, matching user preference
      if (depth > 3) return;
      const title = extractText(node);

      const newItem: TOCNode = {
        type: "heading",
        depth,
        title,
        id: slugger.slug(title),
        children: [],
      };

      // Find the correct parent by traversing down the last children
      let parent = toc;
      while (true) {
        const lastChild = parent.children[parent.children.length - 1];
        if (lastChild && lastChild.depth && lastChild.depth < depth) {
          parent = lastChild;
        } else {
          break;
        }
      }

      parent.children.push(newItem);
    });

    // Attach the TOC to the file's data property
    file.data.toc = toc;
  };
};
