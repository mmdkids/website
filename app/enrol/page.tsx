'use client'

export default function Enrol() {
  return (
    <div className="w-full min-h-screen pt-20 pb-6 px-4 sm:px-6 mt-6 md:mt-30">
      <div className="w-full h-[calc(100vh-8rem)] sm:h-[calc(100vh-7rem)] md:h-[calc(100vh-6rem)] max-w-7xl mx-auto">
        <iframe
          src="https://app.childfriendlypro.com/forms/registrationForm?orgId=a0f02632-e619-48be-b96e-a3224f9433d4&standalone=true"
          title="Join Waitlist"
          className="w-full h-full"
          allow="clipboard-write"
        />
      </div>
    </div>
  )
}
