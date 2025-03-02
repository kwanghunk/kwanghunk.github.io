import React, { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button, Modal, Spinner } from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./PdfViewer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `${window.location.origin}/pdf.worker.min.js`;

const PdfViewer = ({ pdfFile, show, handleClose }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfWidth, setPdfWidth] = useState(window.innerWidth * 0.7); // 초기값 설정
  const thumbnailRefs = useRef([]);

  // 윈도우 크기에 맞춰 PDF 본문 크기 동적 조정
  useEffect(() => {
    const updatePdfSize = () => {
      const modalWidth = window.innerWidth * 0.8; // 모달 너비의 80%
      const maxPdfWidth = Math.min(modalWidth, 1000); // 최대 크기 제한
      setPdfWidth(maxPdfWidth);
    };

    updatePdfSize();
    window.addEventListener("resize", updatePdfSize);

    return () => window.removeEventListener("resize", updatePdfSize);
  }, []);

  // PDF 로드 성공 시 총 페이지 수 설정
  const onDocumentLoadSuccess = ({ numPages }) => {
    setPageNumber(1);
    setNumPages(numPages);
  };

  // 페이지 이동 시 스크롤 적용
  const onPageChange = (newPage) => {
    setPageNumber(newPage);
    thumbnailRefs.current[newPage - 1]?.scrollIntoView({ behavior: "smooth", block: "center", inline: "start" });
  };

  return (
    <Modal show={show} onHide={handleClose} dialogClassName="pdf-modal" centered>
      <Modal.Header closeButton>
        <Modal.Title>PDF Viewer</Modal.Title>
      </Modal.Header>
      <Modal.Body className="pdf-viewer-container">
      
        {/* PDF 표시 */}
        {pdfFile ? (
          <Document
            file={pdfFile}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="loading-container">
                <Spinner animation="border" />
                <p>PDF 로드 중...</p>
              </div>
            }
          >
            {/* 썸네일 */}
            <div className="pdf-thumbnail-container">
              {Array.from(new Array(numPages), (_, index) => (
                <div
                  key={index}
                  ref={(el) => (thumbnailRefs.current[index] = el)}
                  className={`pdf-thumbnail ${pageNumber === index + 1 ? "active" : ""}`}
                  onClick={() => onPageChange(index + 1)}
                >
                  <Page pageNumber={index + 1} width={120} renderTextLayer={false} renderAnnotationLayer={false} />
                </div>
              ))}
            </div>

            {/* 현재 페이지 */}
            <div className="pdf-content">
              <Page pageNumber={pageNumber} width={pdfWidth} renderTextLayer={false} />
            </div>
          </Document>
        ) : (
          <div className="error-message">
            <p>PDF 파일을 불러올 수 없습니다.</p>
          </div>
        )}

        <div className="pdf-controls">
          <Button disabled={pageNumber <= 1} onClick={() => onPageChange(pageNumber - 1)}>이전</Button>
          <span>{pageNumber} / {numPages}</span>
          <Button disabled={pageNumber >= numPages} onClick={() => onPageChange(pageNumber + 1)}>다음</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default PdfViewer;