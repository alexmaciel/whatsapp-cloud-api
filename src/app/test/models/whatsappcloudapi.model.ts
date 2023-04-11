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

export interface Config {
  phoneNumberId?: string;
  token?: number;
}