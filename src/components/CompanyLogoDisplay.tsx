'use client';

import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

const logos = [
  { src: '/companies/google.png', alt: 'Google', url: 'https://about.google/' },
  { src: '/companies/stmicro.png', alt: 'STMicroelectronics', url: 'https://www.st.com/content/st_com/en/about/who-we-are.html' },
  { src: '/companies/paypal.png', alt: 'PayPal', url: 'https://www.paypal.com/us/home' },
  { src: '/companies/meta.png', alt: 'Meta', url: 'https://www.meta.com/about/?srsltid=AfmBOooh7FjuALbhMUs9yhouWCaxWCQ63IA3TzyWsi-C8JISvmOwFop-' },
  { src: '/companies/amazon.png', alt: 'Amazon', url: 'https://www.aboutamazon.com/about-us' },
  { src: '/companies/usaa.png', alt: 'United Services Automotive Association', url: 'https://www.usaa.com/?akredirect=true' },
  { src: '/companies/nutanix.png', alt: 'Nutanix', url: 'https://www.nutanix.com/' },
  { src: '/companies/wizecamel.png', alt: 'WizeCamel', url: 'https://wizecamel.com/' },
  { src: '/companies/LLL.png', alt: 'Lawrence Livermore National Laboratory', url: 'https://www.llnl.gov/' },
  { src: '/companies/renesas.png', alt: 'Renesas Electronics', url: 'https://www.renesas.com/en?srsltid=AfmBOoqBl9MiA8dSucInO5v9T9NuCEUa9GW0g5_prXhcLw-BzUZNk1h4' },
  { src: '/companies/seagate.png', alt: 'Seagate Technology', url: 'https://www.seagate.com/' },
  { src: '/companies/tesla.png', alt: 'Tesla', url: 'https://www.tesla.com/' },
  { src: '/companies/blackhawk.png', alt: 'Blackhawk Networks', url: 'https://blackhawknetwork.com/' },
  { src: '/companies/oracle.png', alt: 'Oracle', url: 'https://www.oracle.com/' },
  { src: '/companies/applied.png', alt: 'Applied Materials', url: 'https://www.appliedmaterials.com/us/en.html' },
  { src: '/companies/amex.png', alt: 'American Express', url: 'https://www.americanexpress.com/' },
  { src: '/companies/gofundme.png', alt: 'GoFundMe', url: 'https://www.gofundme.com/' },
  { src: '/companies/intel.png', alt: 'Intel Corporation', url: 'https://www.intel.com/content/www/us/en/homepage.html' },
  { src: '/companies/epic.png', alt: 'Epic Systems', url: 'https://www.epic.com/' },
  { src: '/companies/commure.png', alt: 'Commure', url: 'https://www.commure.com/' },
  { src: '/companies/wellsfargo.png', alt: 'Wells Fargo', url: 'https://www.wellsfargo.com/' },
  { src: '/companies/hp.png', alt: 'Hewlett Packard', url: 'https://www.hp.com/us-en/home.html' },
  { src: '/companies/dell.png', alt: 'Dell Technologies', url: 'https://www.dell.com/en-us' },
  { src: '/companies/tetratech.png', alt: 'Tetra Tech', url: 'https://www.tetratech.com/' },
  { src: '/companies/synopsys.png', alt: 'Synopsys', url: 'https://www.synopsys.com/' },
  { src: '/companies/markthomas.png', alt: 'Mark Thomas', url: 'https://www.markthomas.com/' },
  { src: '/companies/atlassian.png', alt: 'Atlassian', url: 'https://www.atlassian.com/' },
  { src: '/companies/tabapay.png', alt: 'Tabapay', url: 'https://tabapay.com/' },
  { src: '/companies/boeing.png', alt: 'Boeing', url: 'https://www.boeing.com/' },
  { src: '/companies/nfl.png', alt: 'National Football League', url: 'https://www.nfl.com/' },
  { src: '/companies/github.png', alt: 'Github', url: 'https://www.github.com/' },
  { src: '/companies/bloomberg.png', alt: 'Bloomberg', url: 'https://www.bloomberg.com/' },
  { src: '/companies/stanford.png', alt: 'Stanford Institute for Human-Centered AI', url: 'https://hai.stanford.edu/' },
  { src: '/companies/waymo.png', alt: 'Waymo', url: 'https://waymo.com/' },
  { src: '/companies/supermicro.png', alt: 'Supermicro', url: 'https://www.supermicro.com/en/' },
  { src: '/companies/johnsonjohnson.svg', alt: 'Johnson&Johnson', url: 'https://www.jnj.com/' },
  { src: '/companies/henselphelps.png', alt: 'Hensel Phelps', url: 'https://henselphelps.com/' },
  { src: '/companies/cvs.png', alt: 'CVS Health', url: 'https://www.cvshealth.com/' },
  { src: '/companies/deltadental.png', alt: 'Delta Dental', url: 'https://www.deltadental.com/' },
  { src: '/companies/navy.png', alt: 'US Navy', url: 'https://www.navy.com/' },
  { src: '/companies/microsoft.png', alt: 'Microsoft', url: 'https://www.microsoft.com/en-us/' },
  { src: '/companies/nanotronics.png', alt: 'Nanotronics', url: 'https://nanotronics.ai/' },
  { src: '/companies/nvidia.png', alt: 'NVIDIA', url: 'https://www.nvidia.com/en-us/' },
  { src: '/companies/workday.png', alt: 'Workday', url: 'https://www.workday.com/' },
  { src: '/companies/cisco.png', alt: 'Cisco', url: 'https://www.cisco.com/' },
  { src: '/companies/samsung.svg', alt: 'Samsung', url: 'https://www.samsung.com/us' },
  { src: '/companies/ibm.png', alt: 'IBM', url: 'https://www.ibm.com/us-en' },
  { src: '/companies/nasa.png', alt: 'NASA', url: 'https://www.nasa.gov/' },
  { src: '/companies/starbucks.png', alt: 'Starbucks', url: 'https://www.starbucks.com/' }
];

const CompanyLogoDisplay = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef = useRef<number | null>(null);
  const globeRef = useRef<THREE.Mesh | null>(null);
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const rotationSpeed = useRef({ x: 0.003, y: 0 });
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("🏁 CompanyLogoDisplay mounted, mountRef:", mountRef.current);
    if (!mountRef.current) {
      return;
    }

    let cleanupFunction: (() => void) | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    // Wait for container to have dimensions
    const checkDimensions = () => {
      if (mountRef.current && mountRef.current.clientWidth > 0 && mountRef.current.clientHeight > 0) {
        // Use requestAnimationFrame to ensure browser has painted
        requestAnimationFrame(() => {
          console.log("▶️ about to initialize scene");
          cleanupFunction = initializeScene();
        });
      } else {
        // Retry after a short delay
        timeoutId = setTimeout(checkDimensions, 100);
      }
    };

    const initializeScene = (): (() => void) | null => {
      // Store mount element reference for cleanup
      const mountElement = mountRef.current;
      if (!mountElement) return null;

      // Scene setup
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      // Camera setup
      const camera = new THREE.PerspectiveCamera(
        50,
        mountElement.clientWidth / mountElement.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 18;

      // Check if renderer already exists in the container
      if (mountElement.children.length > 0) {
        mountElement.innerHTML = '';
      }

      // Renderer setup with transparent background
      const renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true 
      });
      renderer.setSize(mountElement.clientWidth, mountElement.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setClearColor(0x000000, 0);
      mountElement.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
      scene.add(ambientLight);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      // Create globe with very subtle wireframe
      const globeGeometry = new THREE.SphereGeometry(6, 32, 32);
      const globeMaterial = new THREE.MeshPhongMaterial({
        color: 0x2a2a2e,
        transparent: true,
        opacity: 0.05,
        wireframe: true,
      });
      const globe = new THREE.Mesh(globeGeometry, globeMaterial);
      scene.add(globe);
      globeRef.current = globe;

      // Create logo sprites
      const logoGroup = new THREE.Group();
      const loader = new THREE.TextureLoader();
      loader.setCrossOrigin('anonymous'); // Enable CORS for better texture loading
      let loadedCount = 0;
      
      // Calculate positions for logos on sphere surface with tighter spacing
      const logoPositions: { x: number; y: number; z: number }[] = [];
      const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle
      
      logos.forEach((logo, i) => {
        const y = 1 - (i / (logos.length - 1)) * 2;
        const radius = Math.sqrt(1 - y * y);
        const theta = phi * i;
        
        const x = Math.cos(theta) * radius;
        const z = Math.sin(theta) * radius;
        
        logoPositions.push({ x: x * 6.3, y: y * 6.3, z: z * 6.3 });
      });

      // Create logo planes without white backgrounds
      logos.forEach((logo, index) => {
        const position = logoPositions[index];
        
        // Create logo plane only (no background)
        const logoGeometry = new THREE.PlaneGeometry(1.0, 1.0);
        const logoMaterial = new THREE.MeshBasicMaterial({
          transparent: true,
          side: THREE.DoubleSide,
          opacity: 0,
          alphaTest: 0.1 // This helps with transparency
        });
        const logoPlane = new THREE.Mesh(logoGeometry, logoMaterial);
        
        // Position logo
        logoPlane.position.set(position.x, position.y, position.z);
        logoPlane.lookAt(0, 0, 0);
        
        // Fix horizontal inversion by rotating 180 degrees around Y axis
        logoPlane.rotateY(Math.PI);
        
        // Store reference for hover effects
        logoPlane.userData = { index, name: logo.alt };
        
        // Load texture with proper transparency
        loader.load(
          logo.src,
          (texture) => {
            // Fix orientation - keep flipY as true (default) for correct orientation
            texture.colorSpace = THREE.SRGBColorSpace;
            
            // Improve texture quality
            texture.minFilter = THREE.LinearMipmapLinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
            
            logoMaterial.map = texture;
            logoMaterial.opacity = 1;
            logoMaterial.needsUpdate = true;
            
            loadedCount++;
            if (loadedCount === logos.length) {
              setIsLoading(false);
            }
          },
          undefined,
          (error) => {
            console.error('Error loading texture:', logo.src, error);
            // Fallback with minimal styling
            logoMaterial.color = new THREE.Color(0x787e91);
            logoMaterial.opacity = 0.5;
            
            loadedCount++;
            if (loadedCount === logos.length) {
              setIsLoading(false);
            }
          }
        );
        
        logoGroup.add(logoPlane);
      });
      
      globe.add(logoGroup);

      // Mouse interaction
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      const handleMouseMove = (event: MouseEvent) => {
        if (!mountElement) return;
        const rect = mountElement.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(logoGroup.children);
        
        // Reset all scales
        logoGroup.children.forEach(child => {
          child.scale.set(1, 1, 1);
        });
        
        if (intersects.length > 0) {
          const hoveredObject = intersects[0].object as THREE.Mesh;
          if (hoveredObject.userData.name) {
            setHoveredLogo(hoveredObject.userData.name);
            mountElement.style.cursor = 'pointer';
            
            // Scale up hovered logo
            hoveredObject.scale.set(1.2, 1.2, 1.2);
          }
        } else {
          setHoveredLogo(null);
          if (mountElement) mountElement.style.cursor = 'default';
        }
      };

      const handleClick = (event: MouseEvent) => {
        if (!mountElement || isDragging.current) return;
        const rect = mountElement.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(logoGroup.children);
        
        if (intersects.length > 0) {
          const clickedObject = intersects[0].object as THREE.Mesh;
          const logoData = logos[clickedObject.userData.index];
          if (logoData.url) {
            window.open(logoData.url, '_blank');
          }
        }
      };

      const handleMouseDown = (event: MouseEvent) => {
        isDragging.current = true;
        previousMousePosition.current = {
          x: event.clientX,
          y: event.clientY
        };
      };

      const handleMouseUp = () => {
        isDragging.current = false;
      };

      const handleDragMove = (event: MouseEvent) => {
        if (!isDragging.current || !globeRef.current) return;

        const deltaMove = {
          x: event.clientX - previousMousePosition.current.x,
          y: event.clientY - previousMousePosition.current.y
        };

        // Update rotation speed based on drag
        rotationSpeed.current = {
          x: deltaMove.x * 0.005,
          y: deltaMove.y * 0.005
        };

        // Apply rotation to globe
        globeRef.current.rotation.y += deltaMove.x * 0.005;
        globeRef.current.rotation.x += deltaMove.y * 0.005;

        // Clamp X rotation to prevent flipping
        globeRef.current.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, globeRef.current.rotation.x));

        previousMousePosition.current = {
          x: event.clientX,
          y: event.clientY
        };
      };

      // Touch events for mobile
      const handleTouchStart = (event: TouchEvent) => {
        isDragging.current = true;
        const touch = event.touches[0];
        previousMousePosition.current = {
          x: touch.clientX,
          y: touch.clientY
        };
      };

      const handleTouchMove = (event: TouchEvent) => {
        if (!isDragging.current || !globeRef.current) return;
        event.preventDefault();
        
        const touch = event.touches[0];
        const deltaMove = {
          x: touch.clientX - previousMousePosition.current.x,
          y: touch.clientY - previousMousePosition.current.y
        };

        rotationSpeed.current = {
          x: deltaMove.x * 0.005,
          y: deltaMove.y * 0.005
        };

        globeRef.current.rotation.y += deltaMove.x * 0.005;
        globeRef.current.rotation.x += deltaMove.y * 0.005;
        globeRef.current.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, globeRef.current.rotation.x));

        previousMousePosition.current = {
          x: touch.clientX,
          y: touch.clientY
        };
      };

      const handleTouchEnd = () => {
        isDragging.current = false;
      };

      // Add event listeners
      mountElement.addEventListener('click', handleClick);
      mountElement.addEventListener('mousemove', handleMouseMove);
      mountElement.addEventListener('mousedown', handleMouseDown);
      mountElement.addEventListener('mouseup', handleMouseUp);
      mountElement.addEventListener('mouseleave', handleMouseUp);
      mountElement.addEventListener('mousemove', handleDragMove);
      mountElement.addEventListener('touchstart', handleTouchStart);
      mountElement.addEventListener('touchmove', handleTouchMove);
      mountElement.addEventListener('touchend', handleTouchEnd);

      // Animation
      const animate = () => {
        frameRef.current = requestAnimationFrame(animate);
        
        if (globeRef.current) {
          // Apply rotation with momentum
          if (!isDragging.current) {
            globeRef.current.rotation.y += rotationSpeed.current.x;
            globeRef.current.rotation.x += rotationSpeed.current.y * 0.5;
            
            // Gradually slow down rotation (friction)
            rotationSpeed.current.x *= 0.95;
            rotationSpeed.current.y *= 0.95;
            
            // Keep a minimum rotation on Y axis
            if (Math.abs(rotationSpeed.current.x) < 0.003) {
              rotationSpeed.current.x = 0.003;
            }
          }
          
          // Subtle floating animation
          globeRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.05;
        }
        
        renderer.render(scene, camera);
      };
      animate();

      // Handle resize
      const handleResize = () => {
        if (!mountElement) return;
        camera.aspect = mountElement.clientWidth / mountElement.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mountElement.clientWidth, mountElement.clientHeight);
      };
      window.addEventListener('resize', handleResize);

      // Add ResizeObserver for container size changes
      const resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
      resizeObserver.observe(mountElement);

      // Cleanup
      return () => {
        if (frameRef.current) {
          cancelAnimationFrame(frameRef.current);
        }
        if (mountElement && renderer.domElement && mountElement.contains(renderer.domElement)) {
          mountElement.removeEventListener('mousemove', handleMouseMove);
          mountElement.removeEventListener('click', handleClick);
          mountElement.removeEventListener('mousedown', handleMouseDown);
          mountElement.removeEventListener('mouseup', handleMouseUp);
          mountElement.removeEventListener('mouseleave', handleMouseUp);
          mountElement.removeEventListener('mousemove', handleDragMove);
          mountElement.removeEventListener('touchstart', handleTouchStart);
          mountElement.removeEventListener('touchmove', handleTouchMove);
          mountElement.removeEventListener('touchend', handleTouchEnd);
          mountElement.removeChild(renderer.domElement);
        }
        
        // Clear the scene with proper type checking
        if (scene) {
          scene.traverse((object) => {
            // Type guard to check if object is a Mesh
            if (object instanceof THREE.Mesh) {
              // Dispose geometry
              if (object.geometry) {
                object.geometry.dispose();
              }
              
              // Dispose material(s)
              if (object.material) {
                if (Array.isArray(object.material)) {
                  object.material.forEach(material => {
                    if (material) material.dispose();
                  });
                } else {
                  object.material.dispose();
                }
              }
            }
            
            // Check for textures in any material
            if ('material' in object && object.material) {
              const materials = Array.isArray(object.material) ? object.material : [object.material];
              materials.forEach((material: THREE.Material) => {
                // Check if material has a map property (texture)
                if (material && 'map' in material && material.map) {
                  (material.map as THREE.Texture).dispose();
                }
              });
            }
          });
          scene.clear();
        }
        
        renderer.dispose();
        window.removeEventListener('resize', handleResize);
        resizeObserver.disconnect();
      };
    };

    // Start initialization
    checkDimensions();

    // Cleanup function
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (cleanupFunction) {
        cleanupFunction();
      }
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div className="flex-1 w-full md:max-w-[100%] relative">
      <div className="relative">
        <div 
          ref={mountRef} 
          className="w-full h-[400px] rounded-lg select-none"
          style={{ imageRendering: 'auto', userSelect: 'none' }}
        />
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[#787e91] text-sm">Loading companies...</div>
          </div>
        )}
        {hoveredLogo && (
          <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg pointer-events-none">
            <p className="text-xs font-medium text-white">{hoveredLogo}</p>
          </div>
        )}
        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full pointer-events-none">
          <p className="text-xs text-gray-300">Drag to rotate • Click to visit</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogoDisplay;