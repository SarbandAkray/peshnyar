export type Content = {
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
    },
    {
      age_smaller: number;
      age_bigger: number;
      rating_name: {
        name: string;
      };
    },
    {
      age_smaller: number;
      age_bigger: number;
      rating_name: {
        name: string;
      };
    },
    {
      age_smaller: number;
      age_bigger: number;
      rating_name: {
        name: string;
      };
    }
  ];
};
