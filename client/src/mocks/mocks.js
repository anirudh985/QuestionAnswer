import casual from 'casual';

const mocks = {
  Query: () => ({
    postsByUser: (root, args) => {
      return { args };
    },
    Post: () => ({ id: () => casual.integer,
                   userId: () => casual.integer,
                   createdBy: () => casual.first_name,
                   title: () => casual.title,
                   text: () => casual.sentences(3),
                 }),
    User: () => ({ id: () => casual.integer,
                   fname: () => casual.first_name,
                   lname: () => casual.last_name,
                 }),
  }),
};

export default mocks;
