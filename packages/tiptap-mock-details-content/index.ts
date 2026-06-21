import { Node } from '@tiptap/core'

export interface DetailsContentOptions {
  HTMLAttributes: Record<string, any>;
}

export const DetailsContent = Node.create<DetailsContentOptions>({
  name: 'detailsContent',
  addOptions() {
    return {
      HTMLAttributes: {},
    }
  },
  content: 'block+',
  defining: true,
  parseHTML() {
    return [
      {
        tag: 'div',
      },
    ]
  },
  renderHTML({ HTMLAttributes }) {
    return ['div', HTMLAttributes, 0]
  },
})
