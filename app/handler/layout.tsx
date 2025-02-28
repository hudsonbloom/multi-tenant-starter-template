// import HandlerHeader from "@/app/components/handler-header";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
    {/* <HandlerHeader /> */}
    <div className="flex-grow">
      {props.children}
    </div>
  </div>
  )
}