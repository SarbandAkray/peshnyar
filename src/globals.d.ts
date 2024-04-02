export type Content = {
  id: int;
  title: string;
  details: string;
  img_url: string;
  creator: string;
  category: {
    name: string;
  };
  contents_genre: [
    {
      genre: {
        name: string;
      };
    }
  ];
  general_age_group: [
    {
      id: number;
      age_bigger: number;
      age_smaller: number;
      content_id: number;
    }
  ];
  age_group_specification: [
    {
      age_smaller: number;
      age_bigger: number;
      rating_name: {
        name: string;
      };
      details: string;
    },
    {
      age_smaller: number;
      age_bigger: number;
      rating_name: {
        name: string;
      };
      details: string;
    },
    {
      age_smaller: number;
      age_bigger: number;
      rating_name: {
        name: string;
      };
      details: string;
    },
    {
      age_smaller: number;
      age_bigger: number;
      rating_name: {
        name: string;
      };
      details: string;
    }
  ];
  reviews?: {
    comment?: string;
    rate: number;
    users: {
      name: string;
      img_url: string;
    };
    updated_at: string;
    created_at: string;
  }[];
};
