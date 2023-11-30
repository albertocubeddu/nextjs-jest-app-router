import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import '@testing-library/jest-dom'

describe('Home', () => {
    it ('Should Have Learn Text', () => {
        // Arrange
        render(<Home />)
    
        // Act
        const LearnText = screen.getByText('Learn')
    
        // Assert
        expect(LearnText).toBeInTheDocument()
    })
})
