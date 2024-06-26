import { useEffect, useRef, useState } from 'react';

export default function HomePage() {
  const viewer = useRef(null);
  const [instance, setInstance] = useState(null);

  useEffect(() => {
    if (!instance) {
      import('@pdftron/webviewer').then(() => {
        WebViewer(
          {
            path: '/webviewer/lib',
            initialDoc: '/files/PDFTRON_about.pdf',
            licenseKey: 'your_license_key',  // sign up to get a free trial key at https://dev.apryse.com
          },
          viewer.current
        ).then((wvInstance) => {
          setInstance(wvInstance);
          const { docViewer } = wvInstance;
          // you can now call WebViewer APIs here...
        });
      });
    }
  }, [instance]);

  return (
    <div className='MyComponent'>
      <div className='webviewer' ref={viewer} style={{ height: '100vh' }}></div>
    </div>
  );
}
