import { Node } from '@tiptap/core'

export interface DetailsOptions {
  openClassName: string;
  HTMLAttributes: Record<string, any>;
}

export const Details = Node.create<DetailsOptions>({
  name: 'details',
  addOptions() {
    return {
      openClassName: 'open',
      HTMLAttributes: {},
    }
  },
  group: 'block',
  content: 'detailsSummary detailsContent',
  defining: true,
  parseHTML() {
    return [
      {
        tag: 'details',
      },
    ]
  },
  renderHTML({ HTMLAttributes }) {
    return ['details', HTMLAttributes, 0]
  },
})
