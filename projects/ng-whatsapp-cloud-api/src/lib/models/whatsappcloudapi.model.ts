export interface MessageData {
  messaging_product: string;
  recipient_type?: string;
  to: string;
  type?: string;
  text?: {
    preview_url: boolean;
    body: string;
  };
  location?: {
    latitude: string,
    longitude: string,
    name: string,
    address: string,
  };   
  image?: {
    id?: any,
    link?: any,
    caption?: string,
  },
  video?: {
    id?: any,
    link?: any,
    caption?: string,
  },
  document?: {
    id?: any,
    link?: any,
    caption?: string,
  },       
}

export interface TemplateData {
  messaging_product: string;
  to: string;
  type: string;
  template: {
    name: string;
    language: {
      code: string;
    };
  };
}