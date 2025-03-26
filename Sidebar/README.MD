Klar! Hier ist eine kurze und prägnante **README.md** für dein `<sidebar-l>` Custom Element:

---

```markdown
# `<sidebar-l>` – Custom Web Component

A lightweight and responsive custom HTML element for side-by-side layouts with a sidebar and main content. Automatically stacks into a column on small viewports.

## 🔧 Features

- Define a fixed-width sidebar (left or right)
- Main content takes the remaining space
- Responsive: stacks vertically when necessary
- Minimal setup, no external dependencies
- Customizable via HTML attributes

## 🚀 Usage

### 1. Include the component (inline or via module)
```html
<script type="module">
  // ... JavaScript code from sidebar-l.js here ...
</script>
```

### 2. Use in your HTML
```html
<sidebar-l side="left" sideWidth="250px" contentMin="60%" space="1rem">
  <nav>Sidebar</nav>
  <main>Main Content</main>
</sidebar-l>
```

## 🧩 Attributes

| Attribute     | Type    | Default     | Description |
|---------------|---------|-------------|-------------|
| `side`        | String  | `"left"`    | Which child is the sidebar (`"left"` or `"right"`) |
| `sideWidth`   | String  | `null`      | Width of the sidebar (e.g., `"250px"`, `"20rem"`) |
| `contentMin`  | String  | `"50%"`     | Minimum width of the content area when side-by-side |
| `space`       | String  | `var(--s1)` | Gap between elements (any CSS spacing unit) |
| `noStretch`   | Boolean | `false`     | Prevents vertical stretching (uses natural height) |

## 📱 Responsive Behavior

When the container is too narrow to respect `contentMin`, the layout collapses vertically, with both children taking 100% width.

## 📦 License

MIT – free to use, modify, and share.

