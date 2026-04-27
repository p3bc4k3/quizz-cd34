import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { QuizPage } from './pages/QuizPage'
import { RevisionPage } from './pages/RevisionPage'
import { ResultPage } from './pages/ResultPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"         element={<HomePage />} />
        <Route path="/quiz"     element={<QuizPage />} />
        <Route path="/revision" element={<RevisionPage />} />
        <Route path="/result"   element={<ResultPage />} />
        <Route path="*"         element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
