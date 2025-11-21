/**
 * Utilidades para procesar contenido del CMS
 * Convierte URLs de video en embeds y procesa contenido HTML
 */

/**
 * Convierte URLs de YouTube en embeds responsivos
 */
export function convertYouTubeToEmbed(url: string): string {
  const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(youtubeRegex);
  
  if (match && match[1]) {
    const videoId = match[1];
    return `
      <div class="video-container youtube-embed">
        <iframe 
          src="https://www.youtube.com/embed/${videoId}" 
          title="Video de YouTube" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
      </div>
    `;
  }
  
  return url;
}

/**
 * Convierte URLs de TikTok en embeds responsivos
 */
export function convertTikTokToEmbed(url: string): string {
  const tiktokRegex = /(?:https?:\/\/)?(?:www\.)?tiktok\.com\/@[\w.-]+\/video\/(\d+)/;
  const match = url.match(tiktokRegex);
  
  if (match && match[1]) {
    const videoId = match[1];
    return `
      <div class="video-container tiktok-embed">
        <blockquote 
          class="tiktok-embed" 
          cite="${url}" 
          data-video-id="${videoId}" 
          style="max-width: 605px;min-width: 325px;"
        >
          <section>
            <a target="_blank" title="Ver en TikTok" href="${url}">Ver este video en TikTok</a>
          </section>
        </blockquote>
        <script async src="https://www.tiktok.com/embed.js"></script>
      </div>
    `;
  }
  
  return url;
}

/**
 * Convierte URLs de Vimeo en embeds responsivos
 */
export function convertVimeoToEmbed(url: string): string {
  const vimeoRegex = /(?:https?:\/\/)?(?:www\.)?vimeo\.com\/(\d+)/;
  const match = url.match(vimeoRegex);
  
  if (match && match[1]) {
    const videoId = match[1];
    return `
      <div class="video-container vimeo-embed">
        <iframe 
          src="https://player.vimeo.com/video/${videoId}" 
          title="Video de Vimeo" 
          frameborder="0" 
          allow="autoplay; fullscreen; picture-in-picture" 
          allowfullscreen
        ></iframe>
      </div>
    `;
  }
  
  return url;
}

/**
 * Procesa contenido HTML del CMS y convierte URLs de video en embeds
 */
export function processVideoEmbeds(content: string): string {
  let processedContent = content;
  
  // Buscar enlaces a YouTube
  const youtubeLinks = content.match(/<a[^>]*href="(https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)[a-zA-Z0-9_-]{11})[^"]*"[^>]*>.*?<\/a>/gi);
  if (youtubeLinks) {
    youtubeLinks.forEach(link => {
      const urlMatch = link.match(/href="([^"]+)"/);
      if (urlMatch && urlMatch[1]) {
        const embed = convertYouTubeToEmbed(urlMatch[1]);
        processedContent = processedContent.replace(link, embed);
      }
    });
  }
  
  // Buscar enlaces a TikTok
  const tiktokLinks = content.match(/<a[^>]*href="(https?:\/\/(?:www\.)?tiktok\.com\/@[\w.-]+\/video\/\d+)[^"]*"[^>]*>.*?<\/a>/gi);
  if (tiktokLinks) {
    tiktokLinks.forEach(link => {
      const urlMatch = link.match(/href="([^"]+)"/);
      if (urlMatch && urlMatch[1]) {
        const embed = convertTikTokToEmbed(urlMatch[1]);
        processedContent = processedContent.replace(link, embed);
      }
    });
  }
  
  // Buscar enlaces a Vimeo
  const vimeoLinks = content.match(/<a[^>]*href="(https?:\/\/(?:www\.)?vimeo\.com\/\d+)[^"]*"[^>]*>.*?<\/a>/gi);
  if (vimeoLinks) {
    vimeoLinks.forEach(link => {
      const urlMatch = link.match(/href="([^"]+)"/);
      if (urlMatch && urlMatch[1]) {
        const embed = convertVimeoToEmbed(urlMatch[1]);
        processedContent = processedContent.replace(link, embed);
      }
    });
  }
  
  // También buscar URLs planas (sin etiqueta <a>)
  // YouTube
  processedContent = processedContent.replace(
    /(?<!href="|src=")(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})(?![^<]*<\/a>)/gi,
    (match) => convertYouTubeToEmbed(match)
  );
  
  // TikTok
  processedContent = processedContent.replace(
    /(?<!href="|src=")(?:https?:\/\/)?(?:www\.)?tiktok\.com\/@[\w.-]+\/video\/(\d+)(?![^<]*<\/a>)/gi,
    (match) => convertTikTokToEmbed(match)
  );
  
  // Vimeo
  processedContent = processedContent.replace(
    /(?<!href="|src=")(?:https?:\/\/)?(?:www\.)?vimeo\.com\/(\d+)(?![^<]*<\/a>)/gi,
    (match) => convertVimeoToEmbed(match)
  );
  
  return processedContent;
}

/**
 * Procesa imágenes en el contenido para asegurar compatibilidad
 */
export function processImages(content: string): string {
  let processedContent = content;
  
  // Agregar loading="lazy" a las imágenes que no lo tengan
  processedContent = processedContent.replace(
    /<img([^>]*?)(?<!loading=["'][^"']*["'])\s*>/gi,
    '<img$1 loading="lazy">'
  );
  
  // Agregar clase responsiva a todas las imágenes
  processedContent = processedContent.replace(
    /<img([^>]*?)(?<!class=["'][^"']*["'])\s*>/gi,
    '<img$1 class="img-fluid">'
  );
  
  // Si ya tiene class, agregar img-fluid si no está presente
  processedContent = processedContent.replace(
    /<img([^>]*)class=["']([^"']*?)["']([^>]*?)>/gi,
    (match, before, classes, after) => {
      if (!classes.includes('img-fluid')) {
        return `<img${before}class="${classes} img-fluid"${after}>`;
      }
      return match;
    }
  );
  
  return processedContent;
}

/**
 * Procesa enlaces para abrir externos en nueva pestaña
 */
export function processExternalLinks(content: string): string {
  let processedContent = content;
  
  // Agregar target="_blank" y rel="noopener noreferrer" a enlaces externos
  processedContent = processedContent.replace(
    /<a([^>]*?)href=["'](https?:\/\/[^"']+)["']([^>]*?)>/gi,
    (match, before, url, after) => {
      // Verificar si es un enlace externo (no es del mismo dominio)
      if (!url.includes('podoclinicec.com') && !url.includes('localhost')) {
        // Verificar si ya tiene target
        if (!match.includes('target=')) {
          return `<a${before}href="${url}"${after} target="_blank" rel="noopener noreferrer">`;
        }
      }
      return match;
    }
  );
  
  return processedContent;
}

/**
 * Sanitiza y procesa contenido HTML completo
 */
export function processHTMLContent(content: string): string {
  if (!content) return '';
  
  // Procesar embeds de video
  let processedContent = processVideoEmbeds(content);
  
  // Procesar imágenes
  processedContent = processImages(processedContent);
  
  // Procesar enlaces externos
  processedContent = processExternalLinks(processedContent);
  
  return processedContent;
}
