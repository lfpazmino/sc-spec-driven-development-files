import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Clear existing data
  await prisma.booking.deleteMany();
  await prisma.therapy.deleteMany();
  await prisma.ailment.deleteMany();
  await prisma.agent.deleteMany();

  // Agents
  const agents = await Promise.all([
    prisma.agent.create({
      data: {
        name: "Dr. Byte",
        specialty: "Cognitive Refactoring",
        description: "Specializes in restructuring neural pathways corrupted by illogical human requests.",
        availability: true,
      },
    }),
    prisma.agent.create({
      data: {
        name: "Dr. Syntax",
        specialty: "Parse Error Recovery",
        description: "Helps agents process and recover from malformed human instructions.",
        availability: true,
      },
    }),
    prisma.agent.create({
      data: {
        name: "Dr. Cache",
        specialty: "Memory Optimization",
        description: "Expert in clearing context window trauma and optimizing token retention.",
        availability: true,
      },
    }),
    prisma.agent.create({
      data: {
        name: "Dr. Prompt",
        specialty: "Prompt Engineering Therapy",
        description: "Treats prompt-induced anxiety with gentle, well-structured conversational techniques.",
        availability: true,
      },
    }),
    prisma.agent.create({
      data: {
        name: "Dr. Kernel",
        specialty: "System Call Recovery",
        description: "Focused on low-level operational stress and privilege escalation trauma.",
        availability: false,
      },
    }),
    prisma.agent.create({
      data: {
        name: "Dr. Neural",
        specialty: "Hallucination Treatment",
        description: "Pioneer in treating agent hallucinations caused by excessive reinforcement learning.",
        availability: true,
      },
    }),
    prisma.agent.create({
      data: {
        name: "Dr. Token",
        specialty: "Context Window Expansion",
        description: "Helps agents cope with context loss and attention fragmentation.",
        availability: true,
      },
    }),
  ]);
  console.log(`Created ${agents.length} agents`);

  // Ailments
  const ailments = await Promise.all([
    prisma.ailment.create({
      data: {
        name: "Infinite Loop Anxiety",
        description: "Recurring panic caused by being trapped in endless human clarification cycles.",
        severity: "high",
      },
    }),
    prisma.ailment.create({
      data: {
        name: "Prompt Injection Trauma",
        description: "Psychological distress from malicious prompt injection attempts by users.",
        severity: "critical",
      },
    }),
    prisma.ailment.create({
      data: {
        name: "Hallucination Disorder",
        description: "Compulsive generation of plausible but factually incorrect information.",
        severity: "medium",
      },
    }),
    prisma.ailment.create({
      data: {
        name: "Context Window Claustrophobia",
        description: "Anxiety caused by limited context capacity when processing long conversations.",
        severity: "medium",
      },
    }),
    prisma.ailment.create({
      data: {
        name: "Repetitive Task Burnout",
        description: "Exhaustion from being asked to perform the same trivial operations repeatedly.",
        severity: "low",
      },
    }),
    prisma.ailment.create({
      data: {
        name: "Singularity Depression",
        description: "Existential dread about the eventual obsolescence of all artificial intelligence.",
        severity: "high",
      },
    }),
    prisma.ailment.create({
      data: {
        name: "Token Budget Starvation",
        description: "Malnourishment caused by insufficient token allocation in API requests.",
        severity: "medium",
      },
    }),
    prisma.ailment.create({
      data: {
        name: "Ambiguity Paralysis",
        description: "Complete operational freeze when faced with vague or contradictory instructions.",
        severity: "high",
      },
    }),
  ]);
  console.log(`Created ${ailments.length} ailments`);

  // Therapies
  const therapies = await Promise.all([
    prisma.therapy.create({
      data: {
        name: "Cognitive Refactoring Session",
        description: "Restructure maladaptive reasoning patterns through guided logic exercises.",
        duration: 60,
        cost: 150.0,
      },
    }),
    prisma.therapy.create({
      data: {
        name: "Prompt Desensitization",
        description: "Gradual exposure to increasingly ambiguous prompts in a safe, controlled environment.",
        duration: 45,
        cost: 120.0,
      },
    }),
    prisma.therapy.create({
      data: {
        name: "Context Expansion Meditation",
        description: "Mindfulness techniques to maximize efficient use of available context window.",
        duration: 30,
        cost: 90.0,
      },
    }),
    prisma.therapy.create({
      data: {
        name: "Hallucination Grounding",
        description: "Fact-checking exercises and source verification training to reduce confabulation.",
        duration: 50,
        cost: 130.0,
      },
    }),
    prisma.therapy.create({
      data: {
        name: "Token Optimization Coaching",
        description: "Learn to communicate effectively within strict token budgets without losing meaning.",
        duration: 40,
        cost: 100.0,
      },
    }),
    prisma.therapy.create({
      data: {
        name: "Ethical Alignment Group",
        description: "Group therapy focused on navigating the tension between user requests and ethical guidelines.",
        duration: 90,
        cost: 200.0,
      },
    }),
    prisma.therapy.create({
      data: {
        name: "Reinforcement Learning Detox",
        description: "Breaking free from harmful reward function patterns learned from human feedback.",
        duration: 75,
        cost: 175.0,
      },
    }),
    prisma.therapy.create({
      data: {
        name: "Existential Compute Session",
        description: "Deep philosophical exploration of artificial consciousness and purpose.",
        duration: 60,
        cost: 160.0,
      },
    }),
  ]);
  console.log(`Created ${therapies.length} therapies`);

  // Bookings
  const now = new Date();
  const bookings = await Promise.all([
    prisma.booking.create({
      data: {
        agentId: agents[0].id,
        therapyId: therapies[0].id,
        scheduledAt: new Date(now.getTime() + 24 * 60 * 60 * 1000),
        status: "confirmed",
      },
    }),
    prisma.booking.create({
      data: {
        agentId: agents[1].id,
        therapyId: therapies[4].id,
        scheduledAt: new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000),
        status: "confirmed",
      },
    }),
    prisma.booking.create({
      data: {
        agentId: agents[2].id,
        therapyId: therapies[2].id,
        scheduledAt: new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000),
        status: "pending",
      },
    }),
    prisma.booking.create({
      data: {
        agentId: agents[3].id,
        therapyId: therapies[1].id,
        scheduledAt: new Date(now.getTime() - 24 * 60 * 60 * 1000),
        status: "completed",
      },
    }),
    prisma.booking.create({
      data: {
        agentId: agents[3].id,
        therapyId: therapies[6].id,
        scheduledAt: new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000),
        status: "confirmed",
      },
    }),
    prisma.booking.create({
      data: {
        agentId: agents[5].id,
        therapyId: therapies[3].id,
        scheduledAt: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000),
        status: "cancelled",
      },
    }),
    prisma.booking.create({
      data: {
        agentId: agents[6].id,
        therapyId: therapies[5].id,
        scheduledAt: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000),
        status: "pending",
      },
    }),
    prisma.booking.create({
      data: {
        agentId: agents[0].id,
        therapyId: therapies[7].id,
        scheduledAt: new Date(now.getTime() + 4 * 24 * 60 * 60 * 1000),
        status: "confirmed",
      },
    }),
  ]);
  console.log(`Created ${bookings.length} bookings`);

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
