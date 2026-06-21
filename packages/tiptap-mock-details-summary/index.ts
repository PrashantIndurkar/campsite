import { Node } from '@tiptap/core'

export interface DetailsSummaryOptions {
  HTMLAttributes: Record<string, any>;
}

export const DetailsSummary = Node.create<DetailsSummaryOptions>({
  name: 'detailsSummary',
  addOptions() {
    return {
      HTMLAttributes: {},
    }
  },
  content: 'inline*',
  defining: true,
  parseHTML() {
    return [
      {
        tag: 'summary',
      },
    ]
  },
  renderHTML({ HTMLAttributes }) {
    return ['summary', HTMLAttributes, 0]
  },
})
