export default function ContestPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-16 px-4 py-10 sm:px-6 lg:py-14">
      <section className="space-y-6 rounded-2xl bg-slate-50 p-6 sm:p-10">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-600">Contest Overview</p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Forge2gether Essay Contest
        </h1>
        <p className="max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
          Placeholder subtitle: a student-centered writing experience designed to build confidence, critical
          thinking, and communication skills through meaningful reflection.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="/training"
            className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Start the Training
          </a>
          <a
            href="/rules"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            Learn More
          </a>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Why this matters</h2>
        <div className="space-y-4 text-slate-700">
          <p>
            Placeholder content: this contest gives students a structured way to explore important ideas and learn
            how to express their perspective clearly and respectfully.
          </p>
          <p>
            Placeholder content: by combining conversation, writing, and reflection, participants practice skills
            they can use in school, community leadership, and future career paths.
          </p>
          <p>
            Placeholder content: the experience is designed to be supportive, practical, and motivating for
            different learning styles and backgrounds.
          </p>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">How it works</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { number: "01", title: "Take the training" },
            { number: "02", title: "Have a conversation" },
            { number: "03", title: "Write your essay" },
            { number: "04", title: "Submit your entry" },
          ].map((step) => (
            <article key={step.number} className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-slate-500">{step.number}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-700">
                Placeholder text describing this step and what participants should expect.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-3 rounded-xl border border-slate-200 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Prizes</h2>
        <p className="text-slate-700">
          Placeholder awards text: recognition tiers, certificates, and featured highlights for top entries will be
          announced here.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Who can enter</h2>
          <ul className="list-disc space-y-2 pl-5 text-slate-700">
            <li>Placeholder eligibility requirement for grade levels or age range.</li>
            <li>Placeholder residency or school participation criteria.</li>
            <li>Placeholder note about individual submissions and deadlines.</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">What judges are looking for</h2>
          <ul className="list-disc space-y-2 pl-5 text-slate-700">
            <li>Clear and original thinking supported by relevant ideas.</li>
            <li>Strong organization, readability, and voice.</li>
            <li>Evidence of reflection, empathy, and communication impact.</li>
          </ul>
        </div>
      </section>

      <section className="rounded-2xl bg-slate-900 px-6 py-10 text-center text-white sm:px-10">
        <h2 className="text-2xl font-semibold sm:text-3xl">Ready to begin?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-200">
          Placeholder CTA text inviting participants to complete the training and prepare for submission.
        </p>
        <a
          href="/training"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
        >
          Start the Training
        </a>
      </section>
    </main>
  );
}
