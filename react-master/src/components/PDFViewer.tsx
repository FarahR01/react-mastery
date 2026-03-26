import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "./PDFViewer.css";

// Configure pdfjs worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFViewerProps {
  pdfPath: string;
  fileName: string;
  title: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfPath, fileName, title }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setError(null);
  }

  function onDocumentLoadError(error: Error) {
    setError(`Failed to load PDF: ${error.message}`);
    console.error("PDF loading error:", error);
  }

  const handlePrevPage = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  const handleNextPage = () => {
    if (numPages && pageNumber < numPages) setPageNumber(pageNumber + 1);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pdf-viewer-container">
      <div className="pdf-controls">
        <button
          className="pdf-btn pdf-btn-primary"
          onClick={() => setIsModalOpen(true)}
        >
          📄 Open {title}
        </button>
        <button className="pdf-btn pdf-btn-secondary" onClick={handleDownload}>
          ⬇️ Download PDF
        </button>
      </div>

      {isModalOpen && (
        <div
          className="pdf-modal-overlay"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="pdf-modal" onClick={(e) => e.stopPropagation()}>
            <div className="pdf-modal-header">
              <h3>{title}</h3>
              <button
                className="pdf-modal-close"
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="pdf-modal-content">
              {error ? (
                <div className="pdf-error-message">
                  <p>⚠️ {error}</p>
                  <p className="pdf-error-help">
                    Try downloading the PDF instead, or check your internet
                    connection.
                  </p>
                </div>
              ) : (
                <Document
                  file={pdfPath}
                  onLoadSuccess={onDocumentLoadSuccess}
                  onError={onDocumentLoadError}
                >
                  <Page
                    pageNumber={pageNumber}
                    width={Math.min(window.innerWidth - 80, 800)}
                  />
                </Document>
              )}
            </div>

            <div className="pdf-modal-footer">
              {!error && (
                <>
                  <button
                    onClick={handlePrevPage}
                    disabled={pageNumber === 1}
                    className="pdf-nav-btn"
                  >
                    ← Previous
                  </button>
                  <span className="pdf-page-info">
                    Page {pageNumber} of {numPages || "..."}
                  </span>
                  <button
                    onClick={handleNextPage}
                    disabled={!numPages || pageNumber === numPages}
                    className="pdf-nav-btn"
                  >
                    Next →
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;
