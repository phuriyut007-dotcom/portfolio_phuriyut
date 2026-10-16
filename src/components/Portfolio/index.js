import { useEffect, useMemo, useState } from 'react'
import Loader from 'react-loaders'
import projects from '../../data/projects'
import './index.scss'

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

const createInitialBoard = () => Array(9).fill(null)

const getWinnerState = (board) => {
  for (const line of winningLines) {
    const [a, b, c] = line
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line }
    }
  }

  if (board.every(Boolean)) {
    return { winner: 'draw', line: [] }
  }

  return null
}

const Portfolio = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0]?.id ?? '')
  const [xoBoard, setXoBoard] = useState(createInitialBoard())
  const [xoTurn, setXoTurn] = useState('X')
  const [xoResult, setXoResult] = useState(null)
  const [showXoGame, setShowXoGame] = useState(false)
  const [showTools, setShowTools] = useState(false)

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedProjectId) ?? projects[0],
    [selectedProjectId]
  )

  useEffect(() => {
    setShowTools(false)
  }, [selectedProjectId])

  const handleSelectProject = (projectId) => {
    setSelectedProjectId(projectId)
    if (projectId !== 'xo-game') {
      setShowXoGame(false)
    }
  }

  const resetGame = () => {
    setXoBoard(createInitialBoard())
    setXoTurn('X')
    setXoResult(null)
    setShowXoGame(true)
  }

  const handleCellClick = (index) => {
    if (showXoGame === false || xoBoard[index] || xoResult) {
      return
    }

    const nextBoard = [...xoBoard]
    nextBoard[index] = xoTurn
    setXoBoard(nextBoard)

    const result = getWinnerState(nextBoard)
    if (result) {
      setXoResult(result)
      return
    }

    setXoTurn(xoTurn === 'X' ? 'O' : 'X')
  }

  useEffect(() => {
    if (!xoResult || !showXoGame) {
      return
    }

    const message = xoResult.winner === 'draw' ? 'ผลลัพธ์: เสมอ!' : `ผลลัพธ์: ${xoResult.winner} ชนะ!`
    window.alert(message)
  }, [xoResult, showXoGame])

  const isXoSelected = selectedProject?.id === 'xo-game'
  const isMangaSelected = selectedProject?.id === 'manga-ocr'

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">โปรเจค</h1>
        <p className="portfolio-intro">ผลงานที่สะท้อนทักษะด้าน OCR, การออกแบบอินเทอร์แอ็กชัน และการสร้างระบบซอฟต์แวร์ที่ใช้งานได้จริง</p>

        <div className="images-container">
          {projects.map((project) => (
            <article
              className={`image-box ${selectedProject?.id === project.id ? 'selected' : ''}`}
              key={project.id}
              tabIndex={0}
              role="button"
              onClick={() => handleSelectProject(project.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  handleSelectProject(project.id)
                }
              }}
            >
              <img
                src={project.image}
                className="portfolio-image"
                alt={project.imageAlt}
                loading="lazy"
                decoding="async"
              />
              <div className="project-content">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span className="project-status">{project.status}</span>
                </div>
                <h2 className="title">{project.name}</h2>
                <p className="description">{project.description}</p>
                <ul className="project-stack">
                  {project.stack.map((item) => (
                    <li key={`${project.id}-${item}`}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {selectedProject && (
          <section className={`project-detail-panel ${isMangaSelected ? 'project-detail-panel--manga' : ''}`} aria-live="polite">
            {!isMangaSelected && (
              <div className="detail-visual">
                <img src={selectedProject.detailImage} alt={`${selectedProject.name} overview`} loading="lazy" decoding="async" />
              </div>
            )}

            <div className="detail-copy">
              <span className="detail-kicker">ภาพรวมโปรเจค</span>
              <h2>{selectedProject.name}</h2>
              <p className="detail-summary">{selectedProject.overview}</p>

              <div className="detail-actions">
                <button type="button" className="more-button" onClick={() => setShowTools((prev) => !prev)}>
                  {showTools ? 'ซ่อนรายละเอียด' : 'เพิ่มเติม'}
                </button>
              </div>

              {showTools && (
                <div className="tool-panel">
                  <div className="tool-grid">
                    {selectedProject.tools?.map((tool) => (
                      <div className="tool-item" key={`${selectedProject.id}-${tool.name}`}>
                        {typeof tool.logo === 'string' && tool.logo.startsWith('/') ? (
                          <img src={tool.logo} alt={`${tool.name} logo`} className="tool-logo" />
                        ) : (
                          <span className="tool-mark">{tool.logo}</span>
                        )}
                        <div className="tool-copy">
                          <span className="tool-name">{tool.name}</span>
                          <small className="tool-description">{tool.description}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="detail-grid">
                <div className="detail-item">
                  <label>ความท้าทาย</label>
                  <p>{selectedProject.challenge}</p>
                </div>
                <div className="detail-item">
                  <label>แนวทางแก้ไข</label>
                  <p>{selectedProject.solution}</p>
                </div>
                <div className="detail-item">
                  <label>ผลลัพธ์</label>
                  <p>{selectedProject.impact}</p>
                </div>
              </div>

              {selectedProject.id === 'manga-ocr' && (
                <div className="ocr-comparison">
                  <div className="ocr-stage">
                    <span>ก่อนแปล</span>
                    <img src={selectedProject.beforeImage} alt="หน้า OCR ก่อนประมวลผล" loading="lazy" decoding="async" />
                  </div>
                  <div className="ocr-stage">
                    <span>หลังแปล</span>
                    <img src={selectedProject.afterImage} alt="หน้า OCR หลังประมวลผลและแปลข้อความ" loading="lazy" decoding="async" />
                  </div>
                </div>
              )}

              {isXoSelected && (
                <div className="xo-game-panel">
                  {!showXoGame ? (
                    <button type="button" className="play-game-button" onClick={() => setShowXoGame(true)}>
                      เล่นเกม XO
                    </button>
                  ) : (
                    <>
                      <div className="xo-status-row">
                        <span className="xo-status">
                          {xoResult
                            ? xoResult.winner === 'draw'
                              ? 'ผลลัพธ์: เสมอ'
                              : `ผลลัพธ์: ${xoResult.winner} ชนะ`
                            : `ตานี้: ${xoTurn}`}
                        </span>
                        <button type="button" className="reset-game-button" onClick={resetGame}>
                          เล่นใหม่
                        </button>
                      </div>

                      <div className="xo-board" role="grid" aria-label="เกม XO">
                        {xoBoard.map((cell, index) => (
                          <button
                            key={`xo-${index}`}
                            type="button"
                            className={`xo-cell ${cell ? 'filled' : ''}`}
                            onClick={() => handleCellClick(index)}
                            aria-label={`ช่อง ${index + 1}`}
                            disabled={Boolean(cell) || Boolean(xoResult)}
                          >
                            {cell}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {!isMangaSelected && (
                <div className="detail-gallery">
                  {selectedProject.gallery.map((item, index) => (
                    <img key={`${selectedProject.id}-gallery-${index}`} src={item} alt={`${selectedProject.name} visual ${index + 1}`} loading="lazy" decoding="async" />
                  ))}
                </div>
              )}
            </div>
          </section>
        )}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
