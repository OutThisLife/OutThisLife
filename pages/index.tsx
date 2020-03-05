import { useRef } from 'react'
import { useMouse } from 'react-use'
import styled from 'styled-components'

const Wrapper = styled.main`
  cursor: none;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  perspective: 2000px;
  overflow: hidden;
  background: #0000ee;

  &:after,
  &:before {
    content: '';
    display: inline-block;
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    width: 3vw;
    height: 3vh;
    border-radius: 999em;
    transform: translate(calc(1px * var(--x)), calc(1px * var(--y)))
      scale(
        calc(max(0.1, (var(--y) - (var(--h) / 2)) / (var(--h) / 2))),
        calc(max(0.1, (var(--x) - (var(--w) / 2)) / (var(--w) / 2)))
      );
    transition: 0.07s linear;
    background: #df0;
  }

  &:before {
    top: 10px;
    filter: blur(3px);
    transform: translate(calc(1px * var(--x)), calc(1px * var(--y)))
      scale(1, calc(2 * max(0.1, (var(--x) - (var(--w) / 2)) / (var(--w) / 2))));
    transition: 0.17s linear;
    background: rgba(10, 50, 0, 0.2);
  }

  h1 {
    position: relative;
    color: #fff;
    font-size: 7.6vmax;
    font-family: 'Dank Mono', Consolas, monospace;
    letter-spacing: -0.1em;
    transform: scale(0.7, 0.6);
  }
`

export default () => {
  const $wrapper = useRef(null)
  const { docX, docY, elW, elH } = useMouse($wrapper)

  return (
    <Wrapper
      ref={$wrapper}
      style={{
        '--x': docX,
        '--y': docY,
        '--w': elW,
        '--h': elH
      }}>
      <h1>OutThisLife</h1>
    </Wrapper>
  )
}
