import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled, { keyframes } from "styled-components"
import confetti from "canvas-confetti"

import { useUserName } from "../../context/UserNameContext"

import Text from "./components/Text"
import LoginWrapper from "./components/LoginWrapper"

const fadeOut = keyframes`
    0% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(20px);
    }
`
const TextWrapper = styled.div`
    margin-top: 300px;
    animation: ${fadeOut} 2s ease-in-out forwards;
    animation-delay: 3s;
`
const FlexWrapper = styled.div`
    display: flex;
`

export default function Signup() {
    const { userName } = useUserName()
    const navigate = useNavigate()

    useEffect(() => {
        function randomInRange(min: number, max: number) {
            return Math.random() * (max - min) + min
        }

        confetti({
            angle: 90,
            spread: randomInRange(50, 70),
            particleCount: randomInRange(50, 150),
            origin: { x: 0.6, y: 0.6 }
        })

        const timer = setTimeout(() => {
            navigate("/main/home")
        }, 5000)

        return () => clearTimeout(timer)
    }, [navigate])

    return (
        <LoginWrapper>
            <TextWrapper>
                <Text text={"개업 축하드립니다🥳"} />
                <FlexWrapper>
                    <Text red={true} text={userName} />
                    <Text text={"\u00A0가게 사장님!"} />
                </FlexWrapper>
            </TextWrapper>
        </LoginWrapper>
    )
}
