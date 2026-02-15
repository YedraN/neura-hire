"use client";

import React from 'react';
import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google';

type Props = {
  gaId?: string;
};

export default function GoogleAnalytics({ gaId }: Props) {
  if (!gaId) return null;
  return <NextGoogleAnalytics gaId={gaId} />;
}
