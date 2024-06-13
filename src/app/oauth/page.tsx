import { NextApiRequest } from 'next';
import React from 'react';

const OauthPage = ({
  searchParams: { code },
}: {
  searchParams: { code: string };
}) => {
  const test = async () => {
    const formData = new URLSearchParams();
    formData.append('code', code);
    formData.append(
      'client_id',
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string
    );
    formData.append(
      'client_secret',
      process.env.NEXT_PUBLIC_GOOGLE_SECRET_PASSWORD as string
    );
    formData.append('redirect_uri', 'http://localhost:3000/oauth');
    formData.append('grant_type', 'authorization_code');

    const res = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    console.log(await res.json());

    return res;
  };

  test();

  return <div>hi</div>;
};

export default OauthPage;
