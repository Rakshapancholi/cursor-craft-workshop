import type { Slide } from "./types";
import grugQuotes from "../starter/grug-quotes.md?raw";
import weatherBrief from "../starter/weather.md?raw";
import fitnessBrief from "../starter/fitness.md?raw";
import {
  ArrowOrb,
  Callout,
  Card,
  Clip,
  CodeBlock,
  Compare,
  CursorPanes,
  Display,
  DotPair,
  Footnote,
  GiantNum,
  GfxRow,
  GfxYear,
  Grid,
  Lead,
  MdTabs,
  Portrait,
  Socials,
  Split,
  Steps,
  TalkPost,
  PhoneShot,
  Shot,
  TopicSlide,
  Waveform,
} from "./layouts";

import studioImg from "@/assets/people-studio.jpg";
import hiringImg from "@/assets/people-hiring.jpg";
import userImg from "@/assets/people-user.jpg";

function Photo({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="human-photo">
      <img src={src} alt={alt} width={1024} height={1280} loading="lazy" />
    </figure>
  );
}

export const slides: Slide[] = [
  {
    id: "title",
    section: "Welcome",
    notes: "Hosts introduce Vittesh. Sit with the title. Then a short about-me, then the promise.",
    render: () => (
      <>
        <GiantNum>01</GiantNum>
        <Display>
          Design right!
          <br />
          <em>Build fast</em>
        </Display>
        <GfxRow>
          <DotPair />
          <ArrowOrb />
        </GfxRow>
        <Lead>AI can build anything. Designers decide what is worth building.</Lead>
        <p className="byline">Vittesh · Studio Orbis</p>
      </>
    ),
  },
  {
    id: "about",
    section: "Welcome",
    notes: "Keep it short. Name, years, where you’ve worked, then sit down into the promise.",
    render: () => (
      <>
        <div className="about-head">
          <Portrait />
          <div>
            <Display size="md">Hi, I’m Vittesh</Display>
            <Lead>7+ years designing software experiences</Lead>
            <Socials />
          </div>
        </div>
        <Grid cols={2} gap="md">
          <Card kicker="Work" title="SaaS, automotive, AI, VR" />
          <Card
            kicker="Currently"
            title="Nagarro"
            body="Previously Simple Energy and Cult.fit"
          />
          <Card kicker="Tools" title="Figma, Cursor, Rive, After Effects" />
          <Card kicker="Off-stage" title="Gaming, sports, projection design" />
        </Grid>
      </>
    ),
  },
  {
    id: "promise",
    section: "Welcome",
    notes: "Read this slowly. It is the spine of the whole workshop.",
    render: () => (
      <>
        <span className="light-mark" hidden />
        <Lead>AI helps you build faster</Lead>
        <Display>
          Your design skills help you
          <br />
          build the <em>right</em> thing
        </Display>
        <GfxRow>
          <DotPair />
          <ArrowOrb />
        </GfxRow>
        <Lead>Your portfolio proves you can do both</Lead>
      </>
    ),
  },
  {
    id: "why-here",
    section: "Welcome",
    notes: "The whole workshop in one sentence: taste plus a written system plus Cursor equals real product.",
    render: () => (
      <div className="with-photo">
        <div>
          <Lead>Why this workshop exists</Lead>
          <Display size="md">
            Taste, written down,
            <br />
            becomes <em>product</em>
          </Display>
          <Grid cols={1} gap="md">
            <Card kicker="01 · Taste" title="Know what good looks like" body="Your judgment is the part AI cannot average out." />
            <Card kicker="02 · System" title="Write it so it can run without you" body="Rules, tokens and a never-list the agent must follow." />
            <Card kicker="03 · Ship" title="Build it live in Cursor" body="From empty folder to a working app, today." />
          </Grid>
        </div>
        <Photo src={studioImg} alt="Designers reviewing a build together" />
      </div>
    ),
  },
  {
    id: "agenda",
    section: "Welcome",
    notes: "Slop and systems take the first half. Cursor is the second: the UI, rules, markdown, then we build one thing the room picks.",
    render: () => (
      <>
        <Display size="md">What we will do today</Display>
        <ol className="agenda">
          <li>
            <div>
              <strong>Welcome</strong>
              <p>Why we’re here, and what “right” means.</p>
            </div>
          </li>
          <li>
            <div>
              <strong>AI slop</strong>
              <p>What it is, why it showed up, and why speed made it worse.</p>
            </div>
          </li>
          <li>
            <div>
              <strong>Why a design system</strong>
              <p>The story of enforcement: decisions that don’t need you in the room.</p>
            </div>
          </li>
          <li>
            <div>
              <strong>Then: Cursor</strong>
              <p>The UI, rules, skills, .md files, then we build one thing the room picks.</p>
            </div>
          </li>
          <li>
            <div>
              <strong>Portfolio & hiring</strong>
              <p>How to show AI-assisted product work honestly.</p>
            </div>
          </li>
          <li>
            <div>
              <strong>Wrap + live Q&A</strong>
              <p>Takeaways, resources, open floor.</p>
            </div>
          </li>
        </ol>
      </>
    ),
  },
  {
    id: "the-conversation",
    section: "Welcome",
    notes:
      "These are not our slides. Read the two punchlines out loud. Hiring is already moving from screens to judgment. Then we name why: slop.",
    render: () => (
      <>
        <Lead>Not “will AI replace designers”</Lead>
        <Display size="md">
          What industry leaders
          <br />
          are talking <em>about</em>
        </Display>
        <Grid cols={2} gap="lg">
          <TalkPost
            platform="X"
            name="Rahul Saini"
            handle="@designsarpanch"
          >
            <p>
              I won’t hire designers to do what bots can do:{" "}
              <em>make screens.</em>
            </p>
            <p>
              I’ll hire designers who can question the output, challenge the
              obvious, and bring taste to the final product.
            </p>
            <p className="talk-punch">
              Execution is getting automated. Judgment is the real design skill.
            </p>
          </TalkPost>
          <TalkPost
            platform="LinkedIn"
            name="James Chughh"
            handle="Product design @ PRISM"
          >
            <p>
              AI doing the work doesn’t make designers jobless. It makes the
              ones who learn it faster.
            </p>
            <p>
              The designers who’ll thrive can spot a product problem, design the
              fix, build it and pitch it.
            </p>
            <p className="talk-punch">
              If your work stops at Figma screens, yes, worry a little.
            </p>
          </TalkPost>
        </Grid>
      </>
    ),
  },
  {
    id: "section-slop",
    section: "1. AI slop",
    notes: "Name the chapter. The average of the internet. Then the two screens.",
    render: () => (
      <TopicSlide>
        <GfxYear num="01" word="Slop" />
        <Display size="md">
          The average of
          <br />
          the <em>internet</em>
        </Display>
      </TopicSlide>
    ),
  },
  {
    id: "slop-speed",
    section: "1. AI slop",
    notes:
      "Open on the two screens. Same emptiness, two palettes. Pause after faster.",
    render: () => (
      <>
        <Lead>Slop was always there</Lead>
        <Display size="md">
          AI just made it <em>faster</em>
        </Display>
        <div className="shot-row">
          <Shot
            src="/slop-cyber.png"
            alt="Generated landing page with neon glow and code-flavoured copy"
          />
          <Shot
            src="/slop-synthwave.jpg"
            alt="Generated landing page with purple glow, pill buttons, and fake metrics"
          />
        </div>
      </>
    ),
  },
  {
    id: "what-slop-is",
    section: "1. AI slop",
    notes:
      "Definition. Not a moral failing. A missing decision. Let the loop on the right play. It looks finished. It is not designed.",
    render: () => (
      <Split
        ratio="1-1"
        left={
          <>
            <Lead>Slop is the internet’s average</Lead>
            <Display size="md">
              Served as if it were
              <br />
              a <em>decision</em>
            </Display>
            <Lead>
              It looks finished. It is not designed. Nobody chose the type, the
              radius, the empty state, or the voice. The model filled the gaps
              with whatever it sees most often.
            </Lead>
          </>
        }
        right={
          <Clip
            src="/slop-dots.gif"
            label="Looping generated graphic"
            align="end"
          />
        }
      />
    ),
  },
  {
    id: "missing-rule",
    section: "1. AI slop",
    notes:
      "Walk the tells, then land the diagnosis: every one is a rule you never wrote down.",
    render: () => (
      <>
        <Lead>Every tell is a rule</Lead>
        <Display size="md">
          You never wrote it <em>down</em>
        </Display>
        <Grid cols={3} gap="sm">
          <Card title="Metric jewellery" body="Three big numbers. +128% conversion. Nobody knows the source." />
          <Card title="Same vibe, every time" body="Soft purple glow, Inter, a pill button, a chart from anyone’s product." />
          <Card title="Invented UI" body="A new button in every toolbar. Five radii. Icons from three families." />
          <Card title="Decorative noise" body="Glass on every card. Gradient text. Sparkles next to anything “AI.”" />
          <Card title="Nobody lives here" body="No empty, error, permission, or loading. Happy path only." />
          <Card title="Voice from nowhere" body="“Unlock insights.” “Seamless.” Copy that could sit on anyone’s pricing page." />
        </Grid>
      </>
    ),
  },
  {
    id: "model-guesses",
    section: "1. AI slop",
    notes: "Three gaps. Inspired by missing context / defaults / measurements. Original wording.",
    render: () => (
      <>
        <Lead>It does not wait for you</Lead>
        <Display size="md">It <em>fills</em></Display>
        <Grid cols={3}>
          <Card
            num="01"
            title="Missing context"
            body="No product, no user, no constraint. It guesses a SaaS that looks like every other SaaS."
          />
          <Card
            num="02"
            title="Missing defaults"
            body="No tokens, no components, no voice. It averages the internet: Inter, purple, 12px radius, and a greeting."
          />
          <Card
            num="03"
            title="Missing measurements"
            body="No one can say it’s wrong. If “done” isn’t checkable, the first pretty pass wins."
          />
        </Grid>
      </>
    ),
  },
  {
    id: "not-the-prompt",
    section: "1. AI slop",
    notes: "Kills the ‘write a better prompt’ instinct.",
    render: () => (
      <>
        <Lead>A longer prompt will not save you</Lead>
        <Display size="md">
          You cannot prompt your way
          <br />
          out of an unpublished <em>system</em>
        </Display>
        <Compare
          badTitle="Longer prompt"
          goodTitle="Written decisions"
          bad={
            <ul>
              <li>“Make it more premium”</li>
              <li>“Less generic, more unique”</li>
              <li>“Award-winning, production-ready”</li>
              <li>The model still has to invent the rules</li>
            </ul>
          }
          good={
            <ul>
              <li>Ink, paper, accent: named</li>
              <li>One button. Two radii. One icon set</li>
              <li>Empty, error, and loading exist</li>
              <li>The model reuses. It does not author</li>
            </ul>
          }
        />
      </>
    ),
  },
  {
    id: "average",
    section: "1. AI slop",
    notes: "Close the slop chapter. Then systems. Let the sphere loop.",
    render: () => (
      <Split
        ratio="1-1"
        left={
          <>
            <Lead>The model’s default</Lead>
            <Display size="md">
              is the <em>average</em>
            </Display>
            <Lead>
              Tech was already good at average. AI just made average cheap. The
              designer’s job did not change: make it above average, on purpose,
              and make that choice survive the next generate.
            </Lead>
          </>
        }
        right={
          <Clip
            src="/average-spin.mp4"
            label="Particle sphere collapsing toward the average"
            shape="portrait"
          />
        }
      />
    ),
  },
  {
    id: "section-system",
    section: "2. Design system",
    notes: "The meme first. Rolling the sphere is the system. Then the definition.",
    render: () => (
      <TopicSlide>
        <Split
          left={
            <>
              <Display size="md">
                Why a
                <br />
                design <em>system</em>
              </Display>
              <Lead>A set of decisions that can run without you</Lead>
            </>
          }
          right={
            <Shot
              src="/work-smarter.webp"
              alt="One person rolls a sphere while others push cubes"
              tall
            />
          }
        />
      </TopicSlide>
    ),
  },
  {
    id: "craft-vs-product",
    section: "2. Design system",
    notes: "Two postures. We need both. Product is the job title.",
    render: () => (
      <>
        <Lead>Two jobs. Do not mix them up</Lead>
        <Display size="md">
          Craft is the <span className="mark">how</span>
          <br />
          Product is the <span className="mark">why</span>
        </Display>
        <Grid>
          <Card
            kicker="The craftsperson"
            title="Loves the pixel"
            body="Could spend a month on one screen. The object is the work. Necessary, and not enough, once the output is cheap."
          />
          <Card
            tone="accent"
            kicker="The product designer"
            title="Loves the outcome"
            body="Launches, watches real use, iterates. Most of us dropped the first word. AI makes that expensive."
          />
        </Grid>
        <Callout>
          If you only push pixels, a model will push them cheaper. If you own
          the outcome, you decide what gets enforced.
        </Callout>
      </>
    ),
  },
  {
    id: "which-one-exercise",
    section: "2. Design system",
    notes:
      "Say it is a small exercise. Ten seconds of silence. Next slide names Screen A and Screen B. Do not reveal which has the system yet.",
    render: () => (
      <>
        <Lead>Let’s do a small exercise</Lead>
        <p className="exercise-time">
          <strong>10</strong>
          <span>seconds</span>
        </p>
        <Display size="md">
          Which one has a
          <br />
          <em>system</em>
        </Display>
      </>
    ),
  },
  {
    id: "real-person",
    section: "2. Systems",
    notes: "Every decision in the Wallet app exists for one person checking their money at night.",
    render: () => (
      <div className="with-photo">
        <div>
          <Lead>Design for a person, not a prompt</Lead>
          <Display size="md">
            Someone checks their budget
            <br />
            at <em>11pm</em>
          </Display>
          <Grid cols={1} gap="md">
            <Card kicker="Glance" title="One number, instantly" body="How much is left this month. Nothing else competes." />
            <Card kicker="Trust" title="Calm, honest status" body="“On track” in sage. Red only when it truly matters." />
          </Grid>
        </div>
        <Photo src={userImg} alt="A person checking a budget app on their phone" />
      </div>
    ),
  },
  {
    id: "same-product",
    section: "2. Design system",
    notes:
      "Let them pick. Screen A is the system. Screen B is slop. Do not say that yet. Take votes.",
    render: () => (
      <>
        <Display size="md">
          One has a design system.
          <br />
          <em>Which one?</em>
        </Display>
        <div className="phone-row">
          <div className="phone-choice">
            <p className="shot-label">Screen A</p>
            <PhoneShot src="/__l5e/assets-v1/ff1339ba-1ddd-4920-b612-17f6ea3bad8a/wallet-app.png" alt="Screen A, home app" />
          </div>
          <div className="phone-choice">
            <p className="shot-label">Screen B</p>
            <PhoneShot src="/phone-slop.png?v=3" alt="Screen B, home app" />
          </div>
        </div>
      </>
    ),
  },
  {
    id: "write-it-down",
    section: "2. Design system",
    notes:
      "Reveal Screen A first. This is the one with a system. Walk the written rules.",
    render: () => (
      <div className="phone-split">
        <PhoneShot src="/__l5e/assets-v1/ff1339ba-1ddd-4920-b612-17f6ea3bad8a/wallet-app.png" alt="Directed home app" />
        <div>
          <Lead>Every decision written down, so it becomes checkable</Lead>
          <Display size="md">
            This one has a <em>system</em>
          </Display>
          <p className="system-pill">DESIGN.md + rules + a never-list</p>
          <ul className="rule-list rule-list-plain">
            <li>The room is the title. No greeting</li>
            <li>Only real data, one unit</li>
            <li>Flat cards, surface tone, no shadows</li>
            <li>Scenes are neutral chips</li>
            <li>One line-icon set, in tiles</li>
            <li>One radius scale</li>
            <li>Left-aligned rows, fixed columns</li>
            <li>On is accent. Off is dim</li>
            <li>Readable secondary text, mono numbers</li>
            <li>One assistant entry: the mic</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "good-saas",
    section: "2. Design system",
    notes:
      "Now Screen B. Every callout is a rule that was never written down.",
    render: () => (
      <div className="phone-split">
        <PhoneShot
          src="/phone-slop.png?v=3"
          alt="Generated home app"
        />
        <div>
          <Lead>Every callout is a rule</Lead>
          <Display size="md">
            that wasn’t written
            <br />
            <em>down</em>
          </Display>
          <ol className="rule-list">
            <li><span>1</span> Gradient hero greeting</li>
            <li><span>2</span> Invented stat cards</li>
            <li><span>3</span> Heavy glass shadows</li>
            <li><span>4</span> Rainbow scene pills</li>
            <li><span>5</span> Emoji as icons</li>
            <li><span>6</span> Five radius values</li>
            <li><span>7</span> Centered everything</li>
            <li><span>8</span> On and off look alike</li>
            <li><span>9</span> Low contrast labels</li>
            <li><span>10</span> Sparkle AI suggestions</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "two-moves",
    section: "2. Design system",
    notes: "Close the system story. Then, and only then, Cursor.",
    render: () => (
      <>
        <Lead>Less time drawing. More time making sure it cannot drift</Lead>
        <Display size="md">
          Enforce, then spend
          <br />
          the <em>hours</em>
        </Display>
        <Grid>
          <Card
            num="01"
            tone="accent"
            title="Enforce"
            body="Write rules a teammate, or a model, can check. Tokens, components, states, a never-list. If it isn’t named, it will be invented."
          />
          <Card
            num="02"
            tone="good"
            title="Spend the saved hours"
            body="Judgment, research, the awkward states, the product questions. Speed is only useful if you spend it on things the average cannot do."
          />
        </Grid>
        <Callout>
          Cursor is not the story. It is the place those rules become executable.
          That is the next section, not before.
        </Callout>
      </>
    ),
  },
  {
    id: "section-cursor",
    section: "3. Cursor",
    notes: "Only now. They should feel the delay on purpose.",
    render: () => (
      <TopicSlide>
        <GfxYear num="03" word="Cursor" />
        <Display size="md">
          How Cursor
          <br />
          follows a <em>system</em>
        </Display>
      </TopicSlide>
    ),
  },
  {
    id: "cursor-ui",
    section: "3. Cursor",
    notes:
      "Point at the three panes. Explorer is the project. Editor is the files. Sidebar is Chat and Agent. Chat explains. Agent writes files. Do not build yet.",
    render: () => (
      <>
        <Lead>The window is three panes</Lead>
        <Display size="md">
          Explorer. Editor. <em>Sidebar</em>
        </Display>
        <CursorPanes />
        <div className="cursor-captions">
          <p>The project. DESIGN.md and rules live here, or they are not real.</p>
          <p>The files. HTML, CSS, markdown. This is what the agent writes.</p>
          <p>Chat explains. Agent edits the project. You brief and critique here.</p>
        </div>
      </>
    ),
  },
  {
    id: "md-files",
    section: "3. Cursor",
    notes:
      "Markdown is just a text file. DESIGN.md is the look. AGENTS.md is behaviour, loaded every time. If it is not a file in the project, the model invents it.",
    render: () => (
      <>
        <Lead>Plain text the agent can read</Lead>
        <Display size="md">
          What a <em>.md</em> file is
        </Display>
        <div className="file-stack">
          <article>
            <span>The format</span>
            <h3>Just a text file</h3>
            <p>
              Headings, lists, a never-list. Cursor can open it because it lives
              in the project. If it is not a file, the agent will invent it.
            </p>
          </article>
          <article>
            <span>The look</span>
            <h3>DESIGN.md</h3>
            <p>
              Tokens, type, space, never-list. If it is not in here, the model
              will invent it.
            </p>
          </article>
          <article>
            <span>The constitution</span>
            <h3>AGENTS.md</h3>
            <p>
              How to behave on this project. Loaded every time. Follow
              DESIGN.md. Don’t make one-offs.
            </p>
          </article>
        </div>
      </>
    ),
  },
  {
    id: "rules-how",
    section: "3. Cursor",
    notes:
      "A rule is always on. Walk the four steps, then the file. Stress .mdc, not .md, unless it is AGENTS.md at the root. This is how Cursor is forced to follow the system.",
    render: () => (
      <>
        <Lead>Always on. Cursor attaches it to every chat</Lead>
        <Display size="md">
          What a <em>rule</em> is
        </Display>
        <Grid cols={2} gap="lg">
          <ol className="plain-steps">
            <li>In the explorer, add a folder: .cursor/rules</li>
            <li>New file. The name ends in .mdc, not .md</li>
            <li>Front matter: alwaysApply: true</li>
            <li>Write what never to invent. Point at DESIGN.md</li>
          </ol>
          <CodeBlock file=".cursor/rules/design-system.mdc">
{`---
description: Visual system. Apply whenever UI is generated or restyled.
alwaysApply: true
---

- Read DESIGN.md before changing any visual style.
- Use only the tokens and components named there.
- Never introduce a new colour, font, radius, or button style.
- If a request conflicts with DESIGN.md, follow DESIGN.md and say so.`}
          </CodeBlock>
        </Grid>
        <Footnote>
          A plain .md in .cursor/rules is ignored. It has to be .mdc, or use
          AGENTS.md in the project root.
        </Footnote>
      </>
    ),
  },
  {
    id: "what-skills",
    section: "3. Cursor",
    notes:
      "A skill is a playbook for a repeated job. It lives in .cursor/skills. The description is how Cursor knows when to use it. You don’t retype the steps.",
    render: () => (
      <>
        <Lead>A playbook you don’t retype</Lead>
        <Display size="md">
          What a <em>skill</em> is
        </Display>
        <Grid cols={2} gap="lg">
          <div className="file-stack stack-1">
            <article>
              <span>Where</span>
              <h3>.cursor/skills</h3>
              <p>
                A folder per job. Inside it, a file named SKILL.md. That is the
                whole skill.
              </p>
            </article>
            <article>
              <span>When</span>
              <h3>The job matches</h3>
              <p>
                Write when to use it in the description. Cursor reads that and
                applies the skill. You can also ask for it.
              </p>
            </article>
            <article>
              <span>What</span>
              <h3>The steps</h3>
              <p>
                How to do that job from the system. Read DESIGN.md. Don’t invent
                a colour. You don’t retype the speech.
              </p>
            </article>
          </div>
          <CodeBlock file=".cursor/skills/build-from-system/SKILL.md">
{`---
name: build-from-system
description: Build or restyle UI using DESIGN.md. Use when creating pages or sections.
---

# Build from the system

1. Read DESIGN.md and the design-system rule.
2. Search existing components before creating anything.
3. After generating, list any values that are not tokens. Fix them.`}
          </CodeBlock>
        </Grid>
      </>
    ),
  },
  {
    id: "cursor-kinds",
    section: "3. Cursor",
    notes:
      "Land the distinction. Rules = what the AI is. Skills = what it does. .md = text it can read. Then how you use them.",
    render: () => (
      <>
        <Lead>Three different jobs. Don’t mix them</Lead>
        <Display size="md">
          Is. Does. <em>Reads</em>
        </Display>
        <div className="file-stack">
          <article>
            <span>Rules</span>
            <h3>What the AI is</h3>
            <p>
              Permanent personality and constraints. Always on. This is the
              never-list.
            </p>
          </article>
          <article>
            <span>Skills</span>
            <h3>What the AI does</h3>
            <p>
              Active tools and workflows. Cursor applies them when the job
              matches.
            </p>
          </article>
          <article>
            <span>.md files</span>
            <h3>Text it can read</h3>
            <p>
              Standard markdown. DESIGN.md, AGENTS.md. Data. Not a personality.
              Not a playbook.
            </p>
          </article>
        </div>
      </>
    ),
  },
  {
    id: "cursor-use",
    section: "3. Cursor",
    notes:
      "They live in the project, not in the chat. Explorer is the source of truth. Rule stays on. Skill fires when the job matches. Then Agent, preview, critique.",
    render: () => (
      <>
        <Lead>They live in the project, not in the chat</Lead>
        <Display size="md">
          How you use them in <em>Cursor</em>
        </Display>
        <Grid cols={3}>
          <Card
            num="01"
            tone="accent"
            title="Files in Explorer"
            body=".md at the root. Rules in .cursor/rules. Skills in .cursor/skills. If it isn’t in the folder, it isn’t real."
          />
          <Card
            num="02"
            title="Don’t paste them"
            body="Don’t paste DESIGN.md into chat. The agent reads the folder. Chat is the brief and the critique."
          />
          <Card
            num="03"
            title="Then open Agent"
            body="Follow DESIGN.md. No new colour, type, or button. Preview. Kill anything that isn’t in the file."
          />
        </Grid>
        <Callout>
          Rule stays on. Skill fires when the job matches. You only retype the
          thing you want built.
        </Callout>
      </>
    ),
  },
  {
    id: "build-pick",
    section: "3. Cursor",
    notes:
      "Hands up. One vote. Next slide has the .md. Copy that file into Cursor as DESIGN.md, then build.",
    render: () => (
      <>
        <Lead>Hands up. One vote</Lead>
        <Display size="md">
          What should we <em>build</em>
        </Display>
        <Grid cols={3}>
          <Card
            num="01"
            tone="accent"
            title="Grug quotes"
            body="One quote a day. Simple."
          />
          <Card
            num="02"
            title="Weather"
            body="Today, one place."
          />
          <Card
            num="03"
            title="Fitness"
            body="Today’s session. Three moves."
          />
        </Grid>
        <Callout>
          Next: the whole path. Then the .md you copy into Cursor.
        </Callout>
      </>
    ),
  },
  {
    id: "build-path",
    section: "3. Cursor",
    notes:
      "Walk this once. Then the next slide is the .md to copy. Empty folder, files, Agent, preview, critique. Don’t skip the preview.",
    render: () => (
      <>
        <Lead>From empty folder to preview</Lead>
        <Display size="md">
          The whole <em>project</em>
        </Display>
        <div className="build-path">
          <div className="build-path-row">
            <article>
              <span>01</span>
              <div>
                <strong>New folder</strong>
                <p>Open Cursor. Open an empty folder. That is the project.</p>
              </div>
            </article>
            <ArrowOrb />
            <article>
              <span>02</span>
              <div>
                <strong>DESIGN.md</strong>
                <p>Next slide has the file. Paste it in the project root.</p>
              </div>
            </article>
            <ArrowOrb />
            <article>
              <span>03</span>
              <div>
                <strong>AGENTS.md and the rule</strong>
                <p>
                  AGENTS.md at the root. Then .cursor/rules, a .mdc file,
                  alwaysApply: true. Both point at DESIGN.md.
                </p>
              </div>
            </article>
          </div>
          <div className="build-path-row">
            <article>
              <span>04</span>
              <div>
                <strong>Agent</strong>
                <p>
                  “Build this one-page app. Follow DESIGN.md. No new colour,
                  type, or button.”
                </p>
              </div>
            </article>
            <ArrowOrb />
            <article>
              <span>05</span>
              <div>
                <strong>Preview</strong>
                <p>Open the browser preview. Click the main action.</p>
              </div>
            </article>
            <ArrowOrb />
            <article>
              <span>06</span>
              <div>
                <strong>Critique, then repeat</strong>
                <p>
                  If it isn’t in DESIGN.md, kill it. Name the leftover. Generate
                  again. Stop when done is true.
                </p>
              </div>
            </article>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "build-brief",
    section: "3. Cursor",
    notes:
      "Open the winning tab. Click to copy. Paste as DESIGN.md in Cursor, then brief the agent to build the one-page app. Stay on the preview.",
    render: () => (
      <>
        <Lead>Click the file. Paste it as DESIGN.md</Lead>
        <Display size="md">
          Then start in <em>Cursor</em>
        </Display>
        <MdTabs
          tabs={[
            { label: "Grug quotes", file: "grug-quotes.md", body: grugQuotes },
            { label: "Weather", file: "weather.md", body: weatherBrief },
            { label: "Fitness", file: "fitness.md", body: fitnessBrief },
          ]}
        />
      </>
    ),
  },
  {
    id: "section-career",
    section: "4. Portfolio",
    notes: "Honesty over mystique.",
    render: () => (
      <TopicSlide>
        <GfxYear num="04" word="2026" />
        <Display size="md">
          Portfolio & <em>hiring</em>
        </Display>
        <p className="lead">Prove judgment, not just pixels</p>
      </TopicSlide>
    ),
  },
  {
    id: "market-2026",
    section: "4. Portfolio",
    notes: "Fewer easy junior openings, but a clearer path. Figures are directional, not an exact global total.",
    render: () => (
      <>
        <Lead>The market changed. Here is how</Lead>
        <Display size="md">
          From expansion to <em>selective</em>
        </Display>
        <Grid cols={3}>
          <Card kicker="Team growth" title="71% → flat" body="71% of design managers hired in 2022. ~5,700 open roles globally in early 2026, flat since 2023." />
          <Card tone="warn" kicker="Junior hiring" title="25% vs 56%" body="Only 25% of hiring managers want more juniors; 56% want more seniors." />
          <Card tone="good" kicker="AI in workflow" title="72%" body="of surveyed designers use generative AI tools. Fluency is becoming expected." />
        </Grid>
        <Callout>
          2,836 exact “Product Designer” postings and 11,562 broader Product / UI-UX postings in 90 days (2026). Demand exists, spread across hybrid titles.
        </Callout>
      </>
    ),
  },
  {
    id: "jd-changed",
    section: "4. Portfolio",
    notes: "2022 judged screens and handoff. 2026 judges connecting insight, goals, constraints and a testable solution.",
    render: () => (
      <>
        <Lead>How the job description changed</Lead>
        <Display size="md">
          Design it → <em>ship it</em>
        </Display>
        <Grid>
          <Card
            kicker="2022"
            title="Design the product experience"
            body={
              <ul>
                <li>Research, wireframes, hi-fi UI, handoff</li>
                <li>Output: a polished Figma file and spec</li>
                <li>Join PMs and engineers after requirements</li>
                <li>AI rarely mentioned; judged on visual craft</li>
              </ul>
            }
          />
          <Card
            tone="good"
            kicker="2026"
            title="Shape, prototype, help ship"
            body={
              <ul>
                <li>Problem framing, AI exploration, implementation</li>
                <li>Output: tested prototype, rationale, shipped change</li>
                <li>With PMs and engineers through discovery and delivery</li>
                <li>Craft plus impact, trade-offs and user evidence</li>
              </ul>
            }
          />
        </Grid>
      </>
    ),
  },
  {
    id: "hired-1",
    section: "4. Portfolio",
    notes: "Stop trying to look experienced. Prove you can find a real problem and decide under constraints.",
    render: () => (
      <>
        <Lead>What gets new designers hired · 1–3</Lead>
        <Display size="md">
          Proof over <em>polish</em>
        </Display>
        <Grid cols={3}>
          <Card kicker="01" title="Three strong projects, not ten weak" body="Problem, user, constraints, decisions, iterations, outcome, learning. Show why, not just final screens." />
          <Card kicker="02" title="Use real constraints" body="A local tiffin service, clinic, coaching center or college club beats a fictional big-app redesign." />
          <Card kicker="03" title="Show your contribution" body="“I ran five interviews, redesigned onboarding, built the UI and tested two versions with eight users.”" />
        </Grid>
      </>
    ),
  },
  {
    id: "hired-2",
    section: "4. Portfolio",
    notes: "Replace 'I improved UX' with a concrete before and after.",
    render: () => (
      <>
      <div className="with-photo">
      <div>
        <Lead>What gets new designers hired · 4–5</Lead>
        <Display size="md">
          Judgment you can <em>explain</em>
        </Display>
        <Grid cols={1} gap="md">
          <Card kicker="04" title="Make AI an advantage" body="Use it for synthesis, copy, UI exploration, prototyping. Document what you rejected and the human judgment you added." />
          <Card kicker="05" title="Speak product and business" body="Explain choices for users, PMs and engineers. Show trade-offs, edge cases, accessibility and measurable results." />
        </Grid>
      </div>
      <Photo src={hiringImg} alt="A designer walking a hiring manager through her portfolio" />
      </div>
      </>
    ),
  },
  {
    id: "honest",
    section: "4. Portfolio",
    notes: "Give them a sentence they can actually use.",
    render: () => (
      <>
        <Lead>Credit the tool</Lead>
        <Display size="md">
          Keep the <em>authorship</em>
        </Display>
        <Grid>
          <Card
            tone="warn"
            kicker="Don’t"
            title="Hide it, or hand it over"
            body={
              <ul>
                <li>“AI made this product.”</li>
                <li>No process, just a pretty URL</li>
                <li>Prompts dumped with no judgment</li>
                <li>A system you couldn’t explain</li>
              </ul>
            }
          />
          <Card
            tone="good"
            kicker="Do"
            title="Direct, then show the taste"
            body={
              <ul>
                <li>“I wrote the system. I used Cursor to produce it.”</li>
                <li>Brief, DESIGN.md, before / after, live link</li>
                <li>The critiques you gave, not the first pass</li>
                <li>What you rejected, and why</li>
              </ul>
            }
          />
        </Grid>
      </>
    ),
  },
  {
    id: "case-study",
    section: "4. Portfolio",
    notes: "A SaaS slice as the case study.",
    render: () => (
      <>
        <Lead>In five beats</Lead>
        <Display size="md">
          Process and <em>taste</em>
        </Display>
        <Steps
          items={[
            { title: "Problem and audience", body: "Who this product is for. What job it has to do in one sitting." },
            { title: "Constraints", body: "Time, no engineering partner, a system you refused to abandon." },
            { title: "The system", body: "Tokens, components, states, the rule that enforced them." },
            { title: "What you rejected", body: "The first generate next to the directed one. Name the slop you killed." },
            { title: "The live thing", body: "A URL, a phone photo, one thing you’d still change." },
          ]}
        />
      </>
    ),
  },
  {
    id: "who-hires",
    section: "4. Portfolio",
    notes: "Both sides want judgment.",
    render: () => (
      <>
        <Lead>Speed is cheap</Lead>
        <Display size="md">
          Judgment is <em>not</em>
        </Display>
        <Grid>
          <Card
            kicker="Startups"
            title="Can you ship, and can you tell"
            body="They want a designer who can put a product slice in someone’s hand this week, and who won’t ship the first generate because it looked finished."
          />
          <Card
            kicker="Larger companies"
            title="Can you raise the floor"
            body="They already have a system. They want someone who encodes it for agents, notices drift, and keeps craft from collapsing into templates."
          />
        </Grid>
        <Callout>
          Both are hiring for the same tell: you can tell good from generic when
          the tool is fast.
        </Callout>
      </>
    ),
  },
  {
    id: "roadmap",
    section: "4. Portfolio",
    notes: "After the talk, on their own time.",
    render: () => (
      <>
        <Lead>Don’t learn “AI”</Lead>
        <Display size="md">
          Learn this loop
          <br />
          on <em>real work</em>
        </Display>
        <Grid cols={3}>
          <Card kicker="This week" title="Write a system" body="A DESIGN.md and a never-list for a product you actually care about. Then generate once." />
          <Card kicker="This month" title="One SaaS slice" body="Inbox, settings, empty states: a clickable prototype on that system, not a portfolio landing page." />
          <Card kicker="This quarter" title="A personal kit" body="A skill, a rule file you reuse, and two case studies that show the before." />
        </Grid>
      </>
    ),
  },
  {
    id: "takeaways",
    section: "Wrap-up",
    notes: "Read all three.",
    render: () => (
      <>
        <Lead>Write it. Enforce it. Then pick up the tool</Lead>
        <ol className="takeaways">
          <li>
            <span>01</span>
            <div>
              <strong>Slop is unpublished design.</strong>
              <p>The model fills gaps. If you didn’t write the rule, you get the average.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <strong>A system is enforcement.</strong>
              <p>Decide once. Write it down. Make it followable. That is how you customise output.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <strong>The tool comes after the system.</strong>
              <p>Cursor, rules, skills, Figma. They execute taste. They do not replace it.</p>
            </div>
          </li>
        </ol>
      </>
    ),
  },
  {
    id: "resources",
    section: "Wrap-up",
    notes: "Co-host drops the pack in chat.",
    render: () => (
      <>
        <Lead>For later</Lead>
        <Display size="md">
          When you sit down
          <br />
          with the <em>tool</em>
        </Display>
        <ul className="resources">
          <li>
            <strong>Cursor for designers</strong>
            <span>cursor.com/for/designers</span>
          </li>
          <li>
            <strong>Rules & AGENTS.md</strong>
            <span>cursor.com/docs/rules</span>
          </li>
          <li>
            <strong>Agent Skills</strong>
            <span>cursor.com/docs/skills</span>
          </li>
          <li>
            <strong>Figma connector in Cursor</strong>
            <span>help.figma.com · Cursor and Figma MCP</span>
          </li>
          <li>
            <strong>Skills for the Figma MCP</strong>
            <span>developers.figma.com · create skills</span>
          </li>
          <li>
            <strong>Starter files</strong>
            <span>DESIGN.md · design-system.mdc · build-from-system skill, in the pack</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "qa",
    section: "Q&A",
    notes: "Co-host picks from chat. Open floor. Don’t start a live build.",
    render: () => (
      <div className="qa-slide">
        <Waveform bars={12} />
        <Lead>Write the system. Then use the tool</Lead>
        <Display>
          <em>Questions</em>
        </Display>
        <GfxRow>
          <DotPair />
          <ArrowOrb />
        </GfxRow>
        <Lead>
          The co-host is watching chat. Drop questions in the community thread
          too. If we don’t get to you, grab us after
        </Lead>
        <p className="byline">Studio Orbis · Vittesh</p>
      </div>
    ),
  },
];
