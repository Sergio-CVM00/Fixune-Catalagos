import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';


export default function proteccion_vehiculo() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.js">
            <div style={{ height: '750px' }}>
                <Viewer
                    fileUrl="/pdfs/cat_proteccionvehiculo_CompressPdf.pdf"
                    plugins={[
                        defaultLayoutPluginInstance,
                    ]}
                />
            </div>
        </Worker>
    );
}