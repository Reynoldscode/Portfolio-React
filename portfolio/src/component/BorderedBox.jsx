

export default function BorderedBox({children}){


  return (
    <div style={{ border: "1px solid #333", padding: "8px 20px" }}>
      { children }
    </div>
  )
}