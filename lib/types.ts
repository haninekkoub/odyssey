interface MemberType {
  image: "image";
  name: string;
  post: string;
}

interface Page {
  name: string;
  slug: {
    _type: "slug";
    current: string;
  };
  // content: Array<AboutBlock>;
}

export type { Page, MemberType };
