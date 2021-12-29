const Wysiwyg = () => {
  let description =
    '<div class="inspect_panels--copyableRow--2_PiZ inspect_panels--highlightRow--21P9S">\n  <div class="inspect_panels--propertyRowContent--7Y-mu inspect_panels--copyableRow--2_PiZ inspect_panels--highlightRow--21P9S">\n    <div class="inspect_panels--contentProperty--2Z1QI text--fontPos11--RSei3 text--_fontBase--YWDo0 ellipsis--ellipsisAfter8Lines--2rn32 ellipsis--_ellipsisAfterNLines--26JkZ">\n      <div>\n        <div class="inspect_panels--copyableRow--2_PiZ inspect_panels--highlightRow--21P9S">\n          <div class="inspect_panels--propertyRowContent--7Y-mu inspect_panels--copyableRow--2_PiZ inspect_panels--highlightRow--21P9S">\n            <div class="inspect_panels--contentProperty--2Z1QI text--fontPos11--RSei3 text--_fontBase--YWDo0 ellipsis--ellipsisAfter8Lines--2rn32 ellipsis--_ellipsisAfterNLines--26JkZ"><strong>Lorem Ipsum</strong><span>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n';

  const maxLength = 316;
  const removeClassAttributes = (wysiwyg) => {
    let updatedWysiwyg = wysiwyg.split('class="');
    updatedWysiwyg.forEach((elm, ind) => {
      let newString = elm;
      if (ind !== 0) {
        newString = newString.split('"');
        newString.shift();
        newString.join('"');
      }
      updatedWysiwyg[ind] = newString;
    });
    return updatedWysiwyg.join("");
  };
  description = removeClassAttributes(description);
  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: description.slice(0, maxLength) }}
      />

      <div>first div</div>
      <div>second div</div>
      <div>third div</div>
    </>
  );
};
export default Wysiwyg;
