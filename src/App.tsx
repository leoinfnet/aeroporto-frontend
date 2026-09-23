import { ActivityFeed } from "@/components/activity-feed"
import { AirportHeader } from "@/components/airport-header"
import { FlightSummary } from "@/components/flight-summary"
import { FlightTable } from "@/components/flight-table"
import { useAirportLive } from "@/hooks/use-airport-live"

export function App() {
  const {
    atividade,
    codigoAtualizado,
    connectionStatus,
    errorMessage,
    isLive,
    isLoading,
    resumo,
    toggleLive,
    voos,
  } = useAirportLive()

  return (
    <main className="min-h-svh bg-[linear-gradient(180deg,#071014_0%,#0b1117_42%,#080a0d_100%)] text-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-5 sm:px-6 lg:px-8">
        <AirportHeader
          connectionStatus={connectionStatus}
          isLive={isLive}
          onToggleLive={toggleLive}
        />

        <FlightSummary resumo={resumo} />

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
          <FlightTable
            codigoAtualizado={codigoAtualizado}
            errorMessage={errorMessage}
            isLoading={isLoading}
            voos={voos}
          />

          <ActivityFeed atividade={atividade} />
        </section>
      </div>
    </main>
  )
}

export default App
