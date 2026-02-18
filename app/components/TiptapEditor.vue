<template>
  <ClientOnly>
    <div class="sb-editor">
      <div v-if="editor" class="simple-editor-wrapper">
        <!-- Toolbar -->
        <div class="tiptap-toolbar" data-variant="fixed">
          <!-- Spacer (left) -->
          <div class="tiptap-spacer" />

          <!-- Group: Undo / Redo -->
          <div class="tiptap-toolbar-group">
            <button
              class="tiptap-button"
              data-style="ghost"
              :data-active-state="undefined"
              :disabled="!editor.can().chain().focus().undo().run()"
              aria-label="Undo"
              @click="editor.chain().focus().undo().run()"
            >
              <i class="ri-arrow-go-back-line tiptap-button-icon" />
            </button>
            <button
              class="tiptap-button"
              data-style="ghost"
              :data-active-state="undefined"
              :disabled="!editor.can().chain().focus().redo().run()"
              aria-label="Redo"
              @click="editor.chain().focus().redo().run()"
            >
              <i class="ri-arrow-go-forward-line tiptap-button-icon" />
            </button>
          </div>

          <div class="tiptap-separator" data-orientation="vertical" />

          <!-- Group: Headings / Lists / Block -->
          <div class="tiptap-toolbar-group">
            <!-- Heading dropdown -->
            <div class="tiptap-dropdown-wrapper">
              <button
                ref="headingBtnRef"
                class="tiptap-button"
                data-style="ghost"
                :data-active-state="activeHeading ? 'on' : 'off'"
                aria-label="Format text as heading"
                @click.stop="toggleHeadingDropdown"
              >
                <i class="ri-heading tiptap-button-icon" />
                <i class="ri-arrow-down-s-line tiptap-button-dropdown-small" />
              </button>
              <Teleport to="body">
                <div
                  v-if="showHeadingDropdown"
                  ref="headingDropdownRef"
                  class="tiptap-dropdown-menu"
                  :style="headingDropdownStyle"
                  @click.stop
                >
                  <button
                    v-for="level in [1, 2, 3, 4]"
                    :key="level"
                    class="tiptap-button tiptap-dropdown-item"
                    data-style="ghost"
                    :data-active-state="
                      editor.isActive('heading', { level }) ? 'on' : 'off'
                    "
                    @click="
                      editor.chain().focus().toggleHeading({ level }).run();
                      showHeadingDropdown = false;
                    "
                  >
                    <i :class="`ri-h-${level} tiptap-button-icon`" />
                    <span class="tiptap-button-text">Heading {{ level }}</span>
                  </button>
                </div>
              </Teleport>
            </div>

            <!-- List dropdown -->
            <div class="tiptap-dropdown-wrapper">
              <button
                ref="listBtnRef"
                class="tiptap-button"
                data-style="ghost"
                :data-active-state="activeList ? 'on' : 'off'"
                aria-label="List options"
                @click.stop="toggleListDropdown"
              >
                <i :class="activeListIcon" class="tiptap-button-icon" />
                <i class="ri-arrow-down-s-line tiptap-button-dropdown-small" />
              </button>
              <Teleport to="body">
                <div
                  v-if="showListDropdown"
                  ref="listDropdownRef"
                  class="tiptap-dropdown-menu"
                  :style="listDropdownStyle"
                  @click.stop
                >
                  <button
                    class="tiptap-button tiptap-dropdown-item"
                    data-style="ghost"
                    :data-active-state="
                      editor.isActive('bulletList') ? 'on' : 'off'
                    "
                    @click="
                      editor.chain().focus().toggleBulletList().run();
                      showListDropdown = false;
                    "
                  >
                    <i class="ri-list-unordered tiptap-button-icon" />
                    <span class="tiptap-button-text">Bullet List</span>
                  </button>
                  <button
                    class="tiptap-button tiptap-dropdown-item"
                    data-style="ghost"
                    :data-active-state="
                      editor.isActive('orderedList') ? 'on' : 'off'
                    "
                    @click="
                      editor.chain().focus().toggleOrderedList().run();
                      showListDropdown = false;
                    "
                  >
                    <i class="ri-list-ordered tiptap-button-icon" />
                    <span class="tiptap-button-text">Ordered List</span>
                  </button>
                  <button
                    class="tiptap-button tiptap-dropdown-item"
                    data-style="ghost"
                    :data-active-state="
                      editor.isActive('taskList') ? 'on' : 'off'
                    "
                    @click="
                      editor.chain().focus().toggleTaskList().run();
                      showListDropdown = false;
                    "
                  >
                    <i class="ri-list-check-3 tiptap-button-icon" />
                    <span class="tiptap-button-text">Task List</span>
                  </button>
                </div>
              </Teleport>
            </div>

            <!-- Blockquote -->
            <button
              class="tiptap-button"
              data-style="ghost"
              :data-active-state="editor.isActive('blockquote') ? 'on' : 'off'"
              aria-label="Blockquote"
              @click="editor.chain().focus().toggleBlockquote().run()"
            >
              <i class="ri-double-quotes-l tiptap-button-icon" />
            </button>

            <!-- Code Block -->
            <button
              class="tiptap-button"
              data-style="ghost"
              :data-active-state="editor.isActive('codeBlock') ? 'on' : 'off'"
              aria-label="Code block"
              @click="editor.chain().focus().toggleCodeBlock().run()"
            >
              <i class="ri-code-box-line tiptap-button-icon" />
            </button>
          </div>

          <div class="tiptap-separator" data-orientation="vertical" />

          <!-- Group: Marks -->
          <div class="tiptap-toolbar-group">
            <button
              class="tiptap-button"
              data-style="ghost"
              :data-active-state="editor.isActive('bold') ? 'on' : 'off'"
              :disabled="!editor.can().chain().focus().toggleBold().run()"
              aria-label="Bold"
              @click="editor.chain().focus().toggleBold().run()"
            >
              <i class="ri-bold tiptap-button-icon" />
            </button>
            <button
              class="tiptap-button"
              data-style="ghost"
              :data-active-state="editor.isActive('italic') ? 'on' : 'off'"
              :disabled="!editor.can().chain().focus().toggleItalic().run()"
              aria-label="Italic"
              @click="editor.chain().focus().toggleItalic().run()"
            >
              <i class="ri-italic tiptap-button-icon" />
            </button>
            <button
              class="tiptap-button"
              data-style="ghost"
              :data-active-state="editor.isActive('strike') ? 'on' : 'off'"
              :disabled="!editor.can().chain().focus().toggleStrike().run()"
              aria-label="Strikethrough"
              @click="editor.chain().focus().toggleStrike().run()"
            >
              <i class="ri-strikethrough tiptap-button-icon" />
            </button>
            <button
              class="tiptap-button"
              data-style="ghost"
              :data-active-state="editor.isActive('code') ? 'on' : 'off'"
              :disabled="!editor.can().chain().focus().toggleCode().run()"
              aria-label="Code"
              @click="editor.chain().focus().toggleCode().run()"
            >
              <i class="ri-code-view tiptap-button-icon" />
            </button>
            <button
              class="tiptap-button"
              data-style="ghost"
              :data-active-state="editor.isActive('underline') ? 'on' : 'off'"
              aria-label="Underline"
              @click="editor.chain().focus().toggleUnderline().run()"
            >
              <i class="ri-underline tiptap-button-icon" />
            </button>
            <button
              class="tiptap-button"
              data-style="ghost"
              :data-active-state="editor.isActive('highlight') ? 'on' : 'off'"
              aria-label="Highlight"
              @click="editor.chain().focus().toggleHighlight().run()"
            >
              <i class="ri-mark-pen-line tiptap-button-icon" />
            </button>
            <button
              class="tiptap-button"
              data-style="ghost"
              :data-active-state="linkActive ? 'on' : 'off'"
              aria-label="Link"
              @click="setLink"
            >
              <i class="ri-link tiptap-button-icon" />
            </button>
          </div>

          <div class="tiptap-separator" data-orientation="vertical" />

          <!-- Group: Superscript / Subscript -->
          <div class="tiptap-toolbar-group">
            <button
              class="tiptap-button"
              data-style="ghost"
              :data-active-state="editor.isActive('superscript') ? 'on' : 'off'"
              aria-label="Superscript"
              @click="editor.chain().focus().toggleSuperscript().run()"
            >
              <i class="ri-superscript tiptap-button-icon" />
            </button>
            <button
              class="tiptap-button"
              data-style="ghost"
              :data-active-state="editor.isActive('subscript') ? 'on' : 'off'"
              aria-label="Subscript"
              @click="editor.chain().focus().toggleSubscript().run()"
            >
              <i class="ri-subscript tiptap-button-icon" />
            </button>
          </div>

          <div class="tiptap-separator" data-orientation="vertical" />

          <!-- Group: Text Alignment -->
          <div class="tiptap-toolbar-group">
            <button
              class="tiptap-button"
              data-style="ghost"
              :data-active-state="
                editor.isActive({ textAlign: 'left' }) ? 'on' : 'off'
              "
              aria-label="Align left"
              @click="editor.chain().focus().setTextAlign('left').run()"
            >
              <i class="ri-align-left tiptap-button-icon" />
            </button>
            <button
              class="tiptap-button"
              data-style="ghost"
              :data-active-state="
                editor.isActive({ textAlign: 'center' }) ? 'on' : 'off'
              "
              aria-label="Align center"
              @click="editor.chain().focus().setTextAlign('center').run()"
            >
              <i class="ri-align-center tiptap-button-icon" />
            </button>
            <button
              class="tiptap-button"
              data-style="ghost"
              :data-active-state="
                editor.isActive({ textAlign: 'right' }) ? 'on' : 'off'
              "
              aria-label="Align right"
              @click="editor.chain().focus().setTextAlign('right').run()"
            >
              <i class="ri-align-right tiptap-button-icon" />
            </button>
            <button
              class="tiptap-button"
              data-style="ghost"
              :data-active-state="
                editor.isActive({ textAlign: 'justify' }) ? 'on' : 'off'
              "
              aria-label="Align justify"
              @click="editor.chain().focus().setTextAlign('justify').run()"
            >
              <i class="ri-align-justify tiptap-button-icon" />
            </button>
          </div>

          <div class="tiptap-separator" data-orientation="vertical" />

          <!-- Group: Add (Image / YouTube) -->
          <div class="tiptap-toolbar-group">
            <button
              class="tiptap-button"
              data-style="ghost"
              aria-label="Add image"
              @click="triggerImageUpload"
            >
              <i class="ri-image-add-line tiptap-button-icon" />
              <span class="tiptap-button-text">Add</span>
            </button>
            <button
              class="tiptap-button"
              data-style="ghost"
              aria-label="Add YouTube video"
              @click="addYoutubeVideo"
            >
              <i class="ri-youtube-line tiptap-button-icon" />
            </button>
          </div>

          <!-- Spacer (right) -->
          <div class="tiptap-spacer" />
        </div>

        <!-- Hidden file input for image upload -->
        <input
          ref="imageInputRef"
          type="file"
          accept="image/*"
          style="display: none"
          @change="onImageSelected"
        />

        <!-- Editor Content -->
        <TiptapEditorContent :editor="editor" class="simple-editor-content" />
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import TextAlign from '@tiptap/extension-text-align';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import Highlight from '@tiptap/extension-highlight';
import Superscript from '@tiptap/extension-superscript';
import Subscript from '@tiptap/extension-subscript';
import Youtube from '@tiptap/extension-youtube';

const showHeadingDropdown = ref(false);
const showListDropdown = ref(false);
const headingBtnRef = ref(null);
const listBtnRef = ref(null);
const headingDropdownRef = ref(null);
const listDropdownRef = ref(null);
const headingDropdownStyle = ref({});
const listDropdownStyle = ref({});

const editor = useEditor({
  editorProps: {
    attributes: {
      autocomplete: 'off',
      autocorrect: 'off',
      autocapitalize: 'off',
      'aria-label': 'Main content area, start typing to enter text.',
      class: 'simple-editor',
    },
  },
  extensions: [
    TiptapStarterKit.configure({
      heading: { levels: [1, 2, 3, 4] },
    }),
    TextAlign.configure({ types: ['heading', 'paragraph'] }),
    TaskList,
    TaskItem.configure({ nested: true }),
    Highlight.configure({ multicolor: true }),
    Superscript,
    Subscript,
    Youtube.configure({
      controls: true,
      nocookie: true,
      modestBranding: true,
    }),
  ],
  content: `
    <h1>Getting started</h1>
    <p>Welcome to the <em><mark>Simple Editor</mark></em> template! This template integrates <strong>open source</strong> UI components and Tiptap extensions licensed under <strong>MIT</strong>.</p>
    <h2>Features</h2>
    <blockquote><p><em>A fully responsive rich text editor with built-in support for common formatting and layout tools.</em></p></blockquote>
    <p>Add images, customize alignment, and apply <mark>advanced formatting</mark> to make your writing more engaging and professional.</p>
    <ul>
      <li><p>Rich text editing with <strong>bold</strong>, <em>italic</em>, <s>strikethrough</s>, and <u>underline</u></p></li>
      <li><p>Headings (H1–H4), blockquotes, and code blocks</p></li>
      <li><p>Ordered, unordered, and task lists</p></li>
      <li><p>Text alignment options</p></li>
    </ul>
  `,
});

// Computed
const activeHeading = computed(() => {
  if (!unref(editor)) return false;
  return [1, 2, 3, 4].some((level) =>
    unref(editor).isActive('heading', { level }),
  );
});

const activeList = computed(() => {
  if (!unref(editor)) return false;
  return (
    unref(editor).isActive('bulletList') ||
    unref(editor).isActive('orderedList') ||
    unref(editor).isActive('taskList')
  );
});

const activeListIcon = computed(() => {
  if (!unref(editor)) return 'ri-list-unordered';
  if (unref(editor).isActive('orderedList')) return 'ri-list-ordered';
  if (unref(editor).isActive('taskList')) return 'ri-list-check-3';
  return 'ri-list-unordered';
});

const linkActive = computed(() => {
  if (!unref(editor)) return false;
  return unref(editor).isActive('link');
});

// Methods
function calcDropdownPosition(btnEl) {
  if (!btnEl) return {};
  const rect = btnEl.getBoundingClientRect();
  return {
    position: 'fixed',
    top: `${rect.bottom + 4}px`,
    left: `${rect.left}px`,
    zIndex: 9999,
  };
}

function toggleHeadingDropdown() {
  showListDropdown.value = false;
  const willShow = !showHeadingDropdown.value;
  showHeadingDropdown.value = willShow;
  if (willShow) {
    headingDropdownStyle.value = calcDropdownPosition(headingBtnRef.value);
  }
}

function toggleListDropdown() {
  showHeadingDropdown.value = false;
  const willShow = !showListDropdown.value;
  showListDropdown.value = willShow;
  if (willShow) {
    listDropdownStyle.value = calcDropdownPosition(listBtnRef.value);
  }
}

function closeAllDropdowns() {
  showHeadingDropdown.value = false;
  showListDropdown.value = false;
}

function setLink() {
  const e = unref(editor);
  if (!e) return;

  if (e.isActive('link')) {
    e.chain().focus().unsetLink().run();
    return;
  }

  const url = window.prompt('URL을 입력하세요:');
  if (url) {
    e.chain().focus().setLink({ href: url }).run();
  }
}

const imageInputRef = ref(null);

function triggerImageUpload() {
  imageInputRef.value?.click();
}

function onImageSelected(event) {
  const e = unref(editor);
  if (!e) return;

  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    const src = reader.result;
    if (typeof src === 'string') {
      e.chain().focus().setImage({ src }).run();
    }
  };
  reader.readAsDataURL(file);

  // Reset input so the same file can be selected again
  event.target.value = '';
}

function addYoutubeVideo() {
  const e = unref(editor);
  if (!e) return;
  const url = window.prompt('YouTube URL을 입력하세요:');
  if (url) {
    e.commands.setYoutubeVideo({ src: url });
  }
}

// Click outside to close dropdowns
function handleClickOutside(event) {
  const target = event.target;

  // Check heading dropdown
  if (showHeadingDropdown.value) {
    const inBtn = headingBtnRef.value?.contains(target);
    const inMenu = headingDropdownRef.value?.contains(target);
    if (!inBtn && !inMenu) {
      showHeadingDropdown.value = false;
    }
  }

  // Check list dropdown
  if (showListDropdown.value) {
    const inBtn = listBtnRef.value?.contains(target);
    const inMenu = listDropdownRef.value?.contains(target);
    if (!inBtn && !inMenu) {
      showListDropdown.value = false;
    }
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside, true);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside, true);
  unref(editor)?.destroy();
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

/* ========================================
   CSS Variables (from Tiptap _variables.scss)
   ======================================== */
:root {
  /* Gray alpha (light mode) */
  --tt-gray-light-a-50: rgba(56, 56, 56, 0.04);
  --tt-gray-light-a-100: rgba(15, 22, 36, 0.05);
  --tt-gray-light-a-200: rgba(37, 39, 45, 0.1);
  --tt-gray-light-a-300: rgba(47, 50, 55, 0.2);
  --tt-gray-light-a-400: rgba(40, 44, 51, 0.42);
  --tt-gray-light-a-500: rgba(52, 55, 60, 0.64);
  --tt-gray-light-a-600: rgba(36, 39, 46, 0.78);
  --tt-gray-light-a-900: rgba(29, 30, 32, 0.98);

  /* Gray (light mode) */
  --tt-gray-light-100: rgba(244, 244, 245, 1);
  --tt-gray-light-200: rgba(234, 234, 235, 1);
  --tt-gray-light-300: rgba(213, 214, 215, 1);
  --tt-gray-light-900: rgba(34, 35, 37, 1);

  /* Brand */
  --tt-brand-color-100: rgba(222, 219, 255, 1);
  --tt-brand-color-200: rgba(195, 189, 255, 1);
  --tt-brand-color-500: rgba(98, 41, 255, 1);

  /* Basic */
  --white: rgba(255, 255, 255, 1);
  --black: rgba(14, 14, 17, 1);

  /* Radius */
  --tt-radius-lg: 0.75rem;
  --tt-radius-md: 0.5rem;

  /* Transition */
  --tt-transition-duration-default: 0.2s;
  --tt-transition-easing-default: cubic-bezier(0.46, 0.03, 0.52, 0.96);

  /* Toolbar */
  --tt-toolbar-height: 44px;
  --tt-toolbar-bg-color: var(--white);
  --tt-toolbar-border-color: var(--tt-gray-light-a-100);

  /* Editor */
  --tt-bg-color: var(--white);
  --tt-theme-text: var(--tt-gray-light-900);

  /* Shadows */
  --tt-shadow-elevated-md:
    0px 16px 48px 0px rgba(17, 24, 39, 0.04),
    0px 12px 24px 0px rgba(17, 24, 39, 0.04),
    0px 6px 8px 0px rgba(17, 24, 39, 0.02),
    0px 2px 3px 0px rgba(17, 24, 39, 0.02);

  /* Highlight colors */
  --tt-color-highlight-yellow: #fef9c3;
  --tt-color-highlight-green: #dcfce7;
  --tt-color-highlight-blue: #e0f2fe;
  --tt-color-highlight-purple: #f3e8ff;
  --tt-color-highlight-red: #ffe4e6;
}

/* ========================================
   Simple Editor Wrapper
   ======================================== */
.simple-editor-wrapper {
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: var(--tt-bg-color);
  font-family: 'Inter', sans-serif;
  color: var(--tt-theme-text);
}

/* ========================================
   Toolbar
   ======================================== */
.tiptap-toolbar {
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &[data-variant='fixed'] {
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100%;
    min-height: var(--tt-toolbar-height);
    background: var(--tt-toolbar-bg-color);
    border-bottom: 1px solid var(--tt-toolbar-border-color);
    padding: 0 0.5rem;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}

.tiptap-toolbar-group {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  flex: 0 0 auto;

  &:empty {
    display: none;
  }
}

/* ========================================
   Separator
   ======================================== */
.tiptap-separator {
  flex-shrink: 0;
  background-color: var(--tt-gray-light-a-200);

  &[data-orientation='vertical'] {
    height: 1.5rem;
    width: 1px;
  }

  &[data-orientation='horizontal'] {
    height: 1px;
    width: 100%;
    margin: 0.5rem 0;
  }
}

/* ========================================
   Spacer
   ======================================== */
.tiptap-spacer {
  flex: 1 1 auto;
}

/* ========================================
   Button
   ======================================== */
.tiptap-button {
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.15;
  height: 2rem;
  min-width: 2rem;
  border: none;
  padding: 0.5rem;
  gap: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--tt-radius-lg, 0.75rem);
  cursor: pointer;
  background-color: transparent;
  color: var(--tt-gray-light-a-600);
  transition-property: background, color, opacity;
  transition-duration: var(--tt-transition-duration-default);
  transition-timing-function: var(--tt-transition-easing-default);

  &:focus-visible {
    outline: none;
  }

  /* Icon styles */
  .tiptap-button-icon {
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
    font-size: 1rem;
    line-height: 1;
    color: var(--tt-gray-light-a-600);
  }

  .tiptap-button-dropdown-small {
    flex-shrink: 0;
    width: 0.625rem;
    height: 0.625rem;
    font-size: 0.625rem;
    line-height: 1;
    color: var(--tt-gray-light-a-400);
  }

  .tiptap-button-text {
    padding: 0 0.125rem;
    flex-grow: 1;
    text-align: left;
    line-height: 1.5rem;
    white-space: nowrap;
  }

  /* Ghost style (default for toolbar) */
  &[data-style='ghost'] {
    background-color: transparent;

    &:hover:not(:disabled) {
      background-color: var(--tt-gray-light-200);
      color: var(--tt-gray-light-a-900);

      .tiptap-button-icon {
        color: var(--tt-gray-light-a-900);
      }
    }

    /* Active state */
    &[data-active-state='on']:not(:disabled) {
      background-color: var(--tt-gray-light-a-200);
      color: var(--tt-gray-light-a-900);

      .tiptap-button-icon {
        color: var(--tt-brand-color-500);
      }

      &:hover {
        background-color: var(--tt-gray-light-300);
      }
    }
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
}

/* ========================================
   Dropdown
   ======================================== */
.tiptap-dropdown-wrapper {
  position: relative;
}

.tiptap-dropdown-menu {
  min-width: 10rem;
  padding: 0.188rem;
  border-radius: calc(0.125rem + var(--tt-radius-lg) + 1px);
  border: 1px solid var(--tt-toolbar-border-color);
  background-color: var(--tt-toolbar-bg-color);
  box-shadow: var(--tt-shadow-elevated-md);
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  font-family: 'Inter', sans-serif;

  .tiptap-dropdown-item {
    width: 100%;
    justify-content: flex-start;
    padding: 0.375rem 0.5rem;
    border-radius: var(--tt-radius-md);
  }
}

/* ========================================
   Editor Content
   ======================================== */
.simple-editor-content {
  //max-width: 648px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.simple-editor-content .tiptap.ProseMirror.simple-editor {
  flex: 1;
  padding: 3rem 3rem 30vh;
  outline: none;
  font-family: 'DM Sans', sans-serif;

  > :first-child {
    margin-top: 0;
  }

  /* Headings */
  h1,
  h2,
  h3,
  h4 {
    line-height: 1.1;
    margin-top: 2.5rem;
    text-wrap: pretty;
    font-weight: 700;
  }

  h1,
  h2 {
    margin-top: 3.5rem;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 1.875rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  h4 {
    font-size: 1.125rem;
  }

  /* Paragraphs */
  p {
    line-height: 1.7;
    margin-top: 0;
    margin-bottom: 0;
  }

  > * + * {
    margin-top: 0.75em;
  }

  /* Lists */
  ul,
  ol {
    padding: 0 1rem;
    margin: 0.5rem 0 0.5rem 0.25rem;

    li p {
      margin-top: 0.25em;
      margin-bottom: 0.25em;
    }
  }

  ul[data-type='taskList'] {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;

      > label {
        flex: 0 0 auto;
        margin-top: 0.25rem;
        user-select: none;
      }

      > div {
        flex: 1 1 auto;
      }
    }
  }

  /* Code */
  code {
    background-color: var(--tt-gray-light-a-50);
    border-radius: 0.25rem;
    color: var(--tt-gray-light-900);
    font-size: 0.85rem;
    padding: 0.2em 0.4em;
    font-family:
      ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  }

  pre {
    background: var(--tt-gray-light-900);
    border-radius: 0.75rem;
    color: var(--white);
    margin: 1.5rem 0;
    padding: 1rem 1.25rem;
    overflow-x: auto;

    code {
      background: none;
      color: inherit;
      font-size: 0.875rem;
      padding: 0;
    }
  }

  /* Blockquote */
  blockquote {
    border-left: 3px solid var(--tt-gray-light-300);
    margin: 1.5rem 0;
    padding-left: 1rem;
    color: var(--tt-gray-light-a-500);
    font-style: italic;
  }

  /* Horizontal Rule */
  hr {
    border: none;
    border-top: 1px solid var(--tt-gray-light-a-200);
    margin: 2rem 0;
  }

  /* Highlight */
  mark {
    background-color: var(--tt-color-highlight-yellow);
    border-radius: 0.25rem;
    padding: 0.125rem 0;
    box-decoration-break: clone;
  }

  /* Links */
  a {
    color: var(--tt-brand-color-500);
    text-decoration: underline;
    cursor: pointer;
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
    border-radius: 0.75rem;
    margin: 1.5rem 0;
  }

  /* YouTube Embed */
  div[data-youtube-video] {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 ratio */
    margin: 1.5rem 0;
    border-radius: 0.75rem;
    overflow: hidden;
    cursor: pointer;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
}

/* ========================================
   Responsive: Mobile
   ======================================== */
@media screen and (max-width: 480px) {
  .simple-editor-content .tiptap.ProseMirror.simple-editor {
    padding: 1rem 1.5rem 30vh;
  }
}
</style>
