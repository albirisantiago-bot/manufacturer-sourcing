# 🚀 QUICK START - 3 MINUTOS

## Paso 1: Crear cuenta en GitHub (si no tenés)
1. Ve a https://github.com
2. Click "Sign up" (arriba derecha)
3. Seguí los pasos (username, email, password)
4. Verificá tu email
5. ✅ Listo!

---

## Paso 2: Crear Repository
1. En GitHub, click ➕ → "New repository"
2. Repository name: `manufacturer-sourcing`
3. ✅ Check "Add a README file"  
4. Click "Create repository"
5. ✅ Repository creado!

---

## Paso 3: Subir Archivos
1. Descargá el ZIP: `manufacturer-sourcing-github.zip`
2. Descomprimí los archivos
3. En GitHub, click "Add file" → "Upload files"
4. Arrastrá estos archivos:
   - `index.html`
   - `app.js`
   - `README.md`
   - `LICENSE`
5. Click "Commit changes"
6. ✅ Archivos subidos!

---

## Paso 4: Activar GitHub Pages
1. En tu repository, click "Settings" (tab arriba)
2. Click "Pages" (menú izquierda)
3. En "Source":
   - Branch: `main`
   - Folder: `/ (root)`
4. Click "Save"
5. Esperá 1-2 minutos
6. ✅ Refresh la página
7. 🎉 Verás: "Your site is published at https://TU-USERNAME.github.io/manufacturer-sourcing/"

---

## Paso 5: ¡Usar Tu Website!
1. Click en el link que aparece en GitHub Pages
2. Probá buscar: "takeaway boxes" + "Turkey"
3. Click "Copy for Google Sheets"
4. Abrí Google Sheets
5. Ctrl+V (o Cmd+V)
6. 🎊 ¡Tenés tu tabla perfecta!

---

## 🎯 TU URL FINAL SERÁ:
`https://TU-USERNAME.github.io/manufacturer-sourcing/`

**Reemplazá TU-USERNAME con tu username de GitHub**

Ejemplo:
- Username: `santiago_denmark`
- URL: `https://santiago_denmark.github.io/manufacturer-sourcing/`

---

## 📱 Compartir Tu Website
Podés compartir esta URL con:
- Tu equipo
- Colegas
- Clientes
- Proveedores

Es público y GRATIS para siempre!

---

## 🔧 Actualizar Datos
Para agregar más manufacturers:

1. En GitHub, click `app.js`
2. Click ✏️ (edit)
3. Buscá `manufacturerDatabase`
4. Agregá tu empresa:

```javascript
'Turkey': {
    'takeaway boxes': [
        {
            company: 'Nueva Empresa',
            comments: 'Descripción',
            specialRef: 'Especialidad',
            website: 'https://...',
            email: 'email@...',
            phone: '+90...',
            address: 'Dirección'
        },
        // ... empresas existentes
    ]
}
```

5. Scroll abajo → "Commit changes"
6. Esperá 1-2 minutos
7. ✅ Cambios en vivo!

---

## ❓ Problemas Comunes

### "404 Not Found"
- Esperá 2-3 minutos después de activar Pages
- Refresh con Ctrl+Shift+R

### "No aparece con estilos"
- Verificá que `app.js` e `index.html` estén en la misma carpeta
- Clear cache del browser

### "Copy no funciona"
- Usá el botón "Download TSV"
- Algunos browsers bloquean clipboard

---

## 🎨 Personalizar

### Cambiar Colores
1. Edit `index.html`
2. Buscá `:root {`
3. Cambiá colores:
```css
:root {
    --primary: #0A4D3C;      /* Verde principal */
    --accent: #F59E0B;        /* Naranja acento */
    --bg-dark: #0D1117;       /* Fondo oscuro */
}
```

### Agregar Tu Logo
1. Subí imagen a repository
2. Edit `index.html`
3. Agregá después de `<h1>`:
```html
<img src="tu-logo.png" alt="Logo" style="height: 50px;">
```

---

## ✅ CHECKLIST FINAL

- [ ] Cuenta GitHub creada
- [ ] Repository creado
- [ ] Archivos subidos (index.html, app.js, README.md, LICENSE)
- [ ] GitHub Pages activado
- [ ] Website funciona
- [ ] Búsqueda funciona
- [ ] Export a Sheets funciona
- [ ] Link compartido con equipo

---

## 🎉 ¡FELICITACIONES!

Tenés tu propia web app GRATIS y pública!

**Próximos pasos:**
1. Agregá más manufacturers
2. Compartí con tu equipo
3. Usalo para sourcing real
4. Expandí a más países

**¿Preguntas?**
- Lee DEPLOYMENT_GUIDE.md (más detalles)
- Lee README.md (documentación completa)

---

**¡Éxito con tu sourcing! 🚀**
