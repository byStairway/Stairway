import React from 'react';
import Link from 'next/link';
import { cookies } from 'next/headers';

import { LIGHT_COLORS, DARK_COLORS } from '@/constants';

import DarkLightToggle from '@/components/DarkLightToggle';

import './styles.css';

function RootLayout({ children }) {
  const savedTheme = cookies().get('color-theme');
  const theme = savedTheme?.value || 'light';

  const themeColors = theme === 'light' ? LIGHT_COLORS : DARK_COLORS;

  return (
    <html lang="en" data-color-theme={theme} style={themeColors}>
      <head>
        <title>Stairway - Multi-Platform Bot  </title>
        <meta name="title" content="Stairway - Multi-Platform Bot  " />
        <meta name="description" content="MultiPlatform Bot for your free and paid use, starting from Discord, Telegram, Whatsapp, and other platforms" />
        <meta name="keywords" content="stairway, bot, bot developer, discordjs, discord bot, stairway bot, whatsapp bot, bot wa, telegram bot, free bot, open source, bot open source, developing bot, wawebjs, facebook bot, bot tools, ai, artificial inteligence, google, gemini, bard, chatgpt" />
        <meta name="robots" content="index, follow"  />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="ilhamjaya08"></meta>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.stairway.blue/" />
        <meta property="og:title" content="Stairway - Multi-Platform Bot  " />
        <meta property="og:description" content="MultiPlatform Bot for your free and paid use, starting from Discord, Telegram, Whatsapp, and other platforms" />
        <meta property="og:image" content="$assets/img/stair.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.stairway.blue/" />
        <meta property="twitter:title" content="Stairway - Multi-Platform Bot  " />
        <meta property="twitter:description" content="MultiPlatform Bot for your free and paid use, starting from Discord, Telegram, Whatsapp, and other platforms" />
        <meta property="twitter:image" content="$assets/img/stair.png" />
      </head>
      <body>
        <header className="site-header">
          <Link href="#">Some Website</Link>
          <DarkLightToggle initialTheme={theme} />
        </header>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
