import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const TextEditor = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div>
      <SunEditor
        // disable={true}
        // disableToolbar={true}
        onChange={(e) => setValue(e)}
        setOptions={{
          buttonList: [
            [
              "undo",
              "redo",
              "font",
              "fontSize",
              "formatBlock",
              "paragraphStyle",
              "blockquote",
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript",
              "fontColor",
              "hiliteColor",
              "textStyle",
              "removeFormat",
              "outdent",
              "indent",
              "align",
              "horizontalRule",
              "list",
              "lineHeight",
              "table",
              "link",
              "image",
              "video",
              "audio",
              // "math",
              // "imageGallery",
              "fullScreen",
              "showBlocks",
              "codeView",
              "preview",
              "print",
              "save",
              "template",
            ],
          ],
        }}
      />
      <div className="editor" dangerouslySetInnerHTML={{ __html: value }}></div>
      
    </div>
  );
};

export default TextEditor;
