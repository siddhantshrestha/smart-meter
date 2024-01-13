const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-slate-200 h-screen w-screen'>
      <main>{children}</main>
    </div>
  )
}

export default Layout
