export default () => (
  <main>
    <style jsx global>{`
      body,
      html {
        margin: 0;
        padding: 0;
      }

      * {
        box-sizing: border-box;
      }

      html {
        font-size: 10vmin;
      }

      body {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        background: #0000ee;
      }

      h1 {
        position: relative;
        color: #fff;
        font-size: 1rem;
        font-family: monospace;
      }

      h1 span {
        display: inline-block;
        position: absolute;
        right: 0;
        color: #0f0;
        border: 0.05em solid;
        padding: 0.5em 0.2em 0.5em 0.25em;
        vertical-align: middle;
        transform: translate(0.2em, 0.07em);
        transform-origin: right center;
      }
    `}</style>

    <h1>
      OutThisLife
      <span />
    </h1>
  </main>
)
