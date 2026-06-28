/** Pure-decoration overlays: ambient gradient/grid, CRT scanlines, vignette,
 *  and a slow moving scan sweep. All non-interactive. */
export function CRT() {
  return (
    <>
      <div className="bg-fx" aria-hidden="true" />
      <div className="crt" aria-hidden="true" />
      <div className="scan-sweep" aria-hidden="true" />
    </>
  )
}
