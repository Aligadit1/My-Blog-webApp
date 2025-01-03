export const webName  ={
    name: 'nameSettings',  // Name of the schema
    title: 'Name Settings',
    type: 'document',
    fields: [
      {
        name: 'myname',    // Field name for "Myname"
        title: 'My Name',  // Title in the studio UI
        type: 'string',    // Type of the field (textual data)
        description: 'Your personal name for display',
      },
      {
        name: 'webname',    // Field name for "Webname"
        title: 'Web Name',  // Title in the studio UI
        type: 'string',     // Type of the field (textual data)
        description: 'The name of your website or web project',
      }
    ],
  };