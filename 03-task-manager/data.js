const tasks = [
  {
    title: 'Complete the project',
    description:
      'Finish all the tasks related to the project before the deadline.',
    completed: false,
    createdAt: '2025-04-01T10:00:00Z',
    dueDate: '2025-04-10T17:00:00Z',
  },
  {
    title: 'Buy groceries',
    description:
      'Get groceries for the week, including milk, eggs, and vegetables.',
    completed: true,
    createdAt: '2025-03-28T08:00:00Z',
    dueDate: '2025-03-28T12:00:00Z',
  },
  {
    title: 'Plan weekend trip',
    description:
      'Organize the weekend trip with friends. Book tickets and accommodations.',
    completed: false,
    createdAt: '2025-04-02T15:30:00Z',
    dueDate: '2025-04-15T18:00:00Z',
  },
  {
    title: 'Finish homework',
    description: 'Complete the math homework and submit it by tomorrow.',
    completed: false,
    createdAt: '2025-04-04T09:00:00Z',
    dueDate: '2025-04-05T23:59:00Z',
  },
  {
    title: 'Clean the house',
    description:
      'Tidy up the living room, kitchen, and bathroom. Vacuum and mop the floor.',
    completed: false,
    createdAt: '2025-04-03T11:30:00Z',
    dueDate: '2025-04-03T16:00:00Z',
  },
  {
    title: 'Attend team meeting',
    description:
      'Participate in the weekly team meeting to discuss the current project status.',
    completed: false,
    createdAt: '2025-04-05T14:00:00Z',
    dueDate: '2025-04-05T15:00:00Z',
  },
  {
    title: 'Buy a new laptop',
    description:
      'Research options and buy a new laptop for the upcoming work trip.',
    completed: false,
    createdAt: '2025-04-01T16:00:00Z',
    dueDate: '2025-04-07T18:00:00Z',
  },
  {
    title: 'Schedule dentist appointment',
    description:
      'Call the dentist to book an appointment for a routine checkup.',
    completed: false,
    createdAt: '2025-04-04T10:00:00Z',
    dueDate: '2025-04-06T11:00:00Z',
  },
  {
    title: 'Organize files',
    description:
      'Sort out the work files, categorize them, and make sure everything is backed up.',
    completed: false,
    createdAt: '2025-04-03T12:00:00Z',
    dueDate: '2025-04-05T17:00:00Z',
  },
  {
    title: 'Read the new book',
    description: 'Read at least 50 pages of the new book I just bought.',
    completed: true,
    createdAt: '2025-03-27T19:00:00Z',
    dueDate: '2025-04-01T22:00:00Z',
  },
  {
    title: 'Write blog post',
    description: 'Write a blog post about recent trends in tech industry.',
    completed: false,
    createdAt: '2025-04-04T08:00:00Z',
    dueDate: '2025-04-07T10:00:00Z',
  },
  {
    title: 'Fix broken chair',
    description: 'Repair the chair in the living room that has a broken leg.',
    completed: false,
    createdAt: '2025-04-03T15:00:00Z',
    dueDate: '2025-04-04T12:00:00Z',
  },
  {
    title: 'Prepare for interview',
    description:
      'Prepare answers to common interview questions and research the company.',
    completed: false,
    createdAt: '2025-04-01T17:00:00Z',
    dueDate: '2025-04-06T14:00:00Z',
  },
  {
    title: 'Update website',
    description:
      'Update the website with the new design and fix any bugs reported by users.',
    completed: false,
    createdAt: '2025-04-02T09:00:00Z',
    dueDate: '2025-04-07T17:00:00Z',
  },
  {
    title: 'Check emails',
    description: 'Go through emails and respond to important ones.',
    completed: true,
    createdAt: '2025-03-30T12:30:00Z',
    dueDate: '2025-03-30T13:00:00Z',
  },
  {
    title: 'Pick up laundry',
    description: 'Pick up dry cleaning from the local laundry shop.',
    completed: true,
    createdAt: '2025-03-29T10:30:00Z',
    dueDate: '2025-03-29T11:00:00Z',
  },
];

Task.insertMany(tasks);
