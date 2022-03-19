import {useEffect, useRef} from 'react';

export default function HomePage() {

    const viewer = useRef(null);

    useEffect(() => {
      import('@pdftron/webviewer').then(() => {
        WebViewer(
          {
            path: '/webviewer/lib',
            initialDoc: '/pdfs/cat_soldadura_CompressPdf.pdf',
          },
          viewer.current,
        ).then((instance) => {
            const { docViewer } = instance;
            instance.UI.disableElements(['toolbarGroup-Shapes']);
            instance.UI.disableElements(['toolbarGroup-Edit'])
            instance.UI.disableElements(['toolbarGroup-Forms'])
            instance.UI.disableElements(['toolbarGroup-Insert'])
            instance.UI.disableElements(['toolbarGroup-Annotate'])
          });
      })
    }, []);


    return (
      <div className="MyComponent">
        <div className="webviewer" ref={viewer} style={{height: "100vh"}}></div>
      </div>
    );
  
}